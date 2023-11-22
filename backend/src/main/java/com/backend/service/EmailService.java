package com.tietoevry.backend.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class EmailService {
    private final JavaMailSender mailSender;
    @Value("${sender.email}")
    private String email;
    @Value("${sender.link}")
    private String link;

    @Async("asyncExecutor")
    public void sendEmail(String subject) throws MessagingException {
        MimeMessage message = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        helper.setTo(subject);
        helper.setSubject(email);
        helper.setText(buildEmail(), true); // true indicates HTML content

        mailSender.send(message);
    }

    private String buildEmail() {
        return """
            <html><body style='font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;'>
                <div style='max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'>
                    <p style='font-size: 18px; color: #333;'>Sveiki,</p>
                    <p style='font-size: 16px; color: #555;'>Pelnęs kolegų simpatijas ir pripažinimą, atrieda naujasis
                        Tietoevry naujienlaiškio numeris!</p>
                    <p style='font-size: 16px; color: #555;'>Kiekvieną mėnesį čia dalinamės įvairia informacija: komandų
                        naujienomis, renginiais, gimtadieniais, atviromis pozicijomis ir kt.</p>
                    <p style='font-size: 16px; color: #555;'>Nori padėkoti komandai/kolegai? Nori pasidalinti sava patirtimi
                        ir nuotykiais? Kreipkis į HR komandą ;)</p>
                    <p style='font-size: 16px; color: #555;'>Su MEILE - Tietoevry naujienlaiškio redakcija ;)</p>
                    <a style='display: inline-block; margin-top: 20px; background-color: #041a97; color: #fff;
                        text-decoration: none; padding: 10px 20px; font-size: 16px; border-radius: 4px;'
                        href='%s'>Read Newsletter</a>
                </div></body></html>
            """.formatted(link);
    }

}
