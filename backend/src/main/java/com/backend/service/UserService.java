package com.backend.service;

import java.util.List;
import java.util.Optional;

import com.backend.database.entity.UserEntity;
import com.backend.database.entity.Role;
import com.backend.database.repository.UserRepository;
import com.backend.exceptions.EmailIsNotUniqueException;
import com.backend.exceptions.UserNotFoundException;
import com.backend.mapper.user.CreateUserFormMapper;
import com.backend.mapper.user.EditUserFormMapper;
import com.backend.mapper.user.UserMapper;
import com.backend.model.user.CreateUserForm;
import com.backend.model.user.EditUserForm;
import com.backend.model.user.User;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService {
    private final PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;

    public List<User> getUsers() {
        List<UserEntity> users = userRepository.findAll();

        return users
            .stream()
            .map(UserMapper::toUser)
            .toList();
    }

    public Optional<User> getUser(Long id) {
        Optional<UserEntity> user = userRepository.findById(id);

        return user.map(UserMapper::toUser);
    }

    public User createUser(CreateUserForm createUserForm) {
        boolean emailExists = userRepository.existsByEmail(createUserForm.getEmail());
        if (emailExists) {
            throw new EmailIsNotUniqueException(String.format("%s email already exists.", createUserForm.getEmail()));
        }
        String encodedPassword = passwordEncoder.encode(createUserForm.getPassword());
        UserEntity userToCreate = CreateUserFormMapper.toUserEntity(createUserForm, encodedPassword);

        UserEntity createdUser = userRepository.save(userToCreate);

        return UserMapper.toUser(createdUser);
    }

    public User editUser(Long id, EditUserForm editUserForm) {
        boolean emailExists = userRepository.existsByIdIsNotAndEmail(id, editUserForm.getEmail());
        if (emailExists) {
            throw new EmailIsNotUniqueException(String.format("%s email already exists.", editUserForm.getEmail()));
        }
        UserEntity existingUser = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(String.format("User with id %d does not exist.", id)));

        UserEntity updatedUser = EditUserFormMapper.toUserEntity(id, existingUser.getPassword(), editUserForm);
        UserEntity user = userRepository.save(updatedUser);

        return UserMapper.toUser(user);
    }

    public void deleteUser(Long id) {
        UserEntity existingUser = userRepository.findById(id)
            .orElseThrow(() -> new UserNotFoundException(String.format("User with id %d does not exist.", id)));

        List<Role> userRoles = existingUser.getRoles();
        boolean isAdmin = userRoles.contains(Role.ADMIN);

        if (!isAdmin) {
            userRepository.deleteById(id);
        }
    }
}
