package com.tietoevry.backend.service;

import java.util.List;
import java.util.Optional;

import com.tietoevry.backend.database.entity.MediaType;
import com.tietoevry.backend.database.entity.NewsletterEntity;
import com.tietoevry.backend.database.entity.RecommendationEntity;
import com.tietoevry.backend.database.repository.NewsletterRepository;
import com.tietoevry.backend.database.repository.RecommendationRepository;
import com.tietoevry.backend.mapper.recommendation.CreateRecommendationMapper;
import com.tietoevry.backend.mapper.recommendation.RecommendationMapper;
import com.tietoevry.backend.model.book.Volume;
import com.tietoevry.backend.model.movie.OmdbMovie;
import com.tietoevry.backend.model.recommendation.CreateRecommendationForm;
import com.tietoevry.backend.model.recommendation.Recommendation;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecommendationService {
    private final RecommendationRepository recommendationsRepository;
    private final NewsletterRepository newsletterRepository;
    private final OmdbApiService movieService;
    private final GoogleBooksApiService bookService;

    public Recommendation createRecommendationByMovie(CreateRecommendationForm createRecommendation) {
        NewsletterEntity newsletter = newsletterRepository.findById(createRecommendation.getNewsletterId())
            .orElseThrow();
        OmdbMovie movie = movieService.searchMovieByName(createRecommendation.getTitle());
        RecommendationEntity recommendation =
            CreateRecommendationMapper.toRecommendationEntity(createRecommendation);
        recommendation.setTitle(movie.getTitle());
        recommendation.setApiId(movie.getId());
        recommendation.setNewsletter(newsletter);
        RecommendationEntity recommendationEntity = recommendationsRepository.save(recommendation);
        return RecommendationMapper.toRecommendation(recommendationEntity);
    }

    public Recommendation createRecommendationByBook(CreateRecommendationForm createRecommendation) {
        NewsletterEntity newsletter = newsletterRepository.findById(createRecommendation.getNewsletterId())
            .orElseThrow();
        Optional<Volume> optionalBook = bookService.getBookByTitle(createRecommendation.getTitle());
        if (optionalBook.isPresent()) {
            Volume book = optionalBook.get();
            RecommendationEntity recommendation =
                CreateRecommendationMapper.toRecommendationEntity(createRecommendation);
            recommendation.setTitle(book.getVolumeInfo().getTitle());
            recommendation.setApiId(book.getId());
            recommendation.setNewsletter(newsletter);
            RecommendationEntity recommendationEntity = recommendationsRepository.save(recommendation);
            return RecommendationMapper.toRecommendation(recommendationEntity);
        }
        return null;
    }

    public List<OmdbMovie> getAllMovies(Long newslleterId) {
        NewsletterEntity newsletter = newsletterRepository.findById(newslleterId)
            .orElseThrow();

        return newsletter.getRecommendations().stream()
            .filter(recommendation -> recommendation.getMediaType() == MediaType.FILM)
            .map(recommendation -> {
                OmdbMovie movie = movieService.getMovieById(recommendation.getApiId());
                movie.setEntityId(recommendation.getRecommendationsId());
                return movie;
            })
            .toList();
    }

    public List<Volume> getAllBooks(Long newslleterId) {
        NewsletterEntity newsletter = newsletterRepository.findById(newslleterId)
            .orElseThrow();

        return newsletter.getRecommendations().stream()
            .filter(recommendation -> recommendation.getMediaType() == MediaType.BOOK)
            .map(recommendation -> {
                Volume book = bookService.getBookById(recommendation.getApiId());
                book.setEntityId(recommendation.getRecommendationsId());
                return book;
            })
            .toList();
    }

    public void deleteRecommendation(Long id) {
        recommendationsRepository.deleteById(id);
    }
}
