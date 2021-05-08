
package com.Springbootbackend.Springboot;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PutMapping;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")

public class Controller {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getUser() {
        return this.userRepository.findAll();
    }

    @PostMapping("/users")
    ResponseEntity<User> createUser(@RequestBody User user_info) throws URISyntaxException {
        User result = userRepository.save(user_info);
        return ResponseEntity.ok().body(result);

    }

    @DeleteMapping("/users/{id}")
    void deleteEmployee(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
    /*
     * @PutMapping("/users/{id}") User replaceEmployee(@RequestBody User
     * newUser, @PathVariable Long id) {
     * 
     * return userRepository.findById(id).map(new_user -> { new_user
     * 
     * 
     * 
     * 
     * new_user.setUserName(newUser.getUserName());
     * new_user.setPassword(newUser.getPassword());
     * new_user.setEmail(newUser.getEmail());
     * new_user.setCountry(newUser.getCountry()); return
     * todoRepository.save(new_user); }).orElseGet(() -> { newTask.setId(id); return
     * todoRepository.save(newTask); }); }
     */

}