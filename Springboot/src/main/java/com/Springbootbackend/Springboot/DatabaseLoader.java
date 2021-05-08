
package com.Springbootbackend.Springboot;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author
 */

@Component
public class DatabaseLoader implements CommandLineRunner { // <2>

    private final UserRepository repository;

    @Autowired
    public DatabaseLoader(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.repository.save(new User("John", "123@gmail.com", "123@gmail.com", "USA"));

    }
}