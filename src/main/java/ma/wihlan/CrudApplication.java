package ma.wihlan;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import ma.wihlan.enteties.User;
import ma.wihlan.repositories.UserRepository;

@SpringBootApplication
public class CrudApplication implements CommandLineRunner{
	
	
	@Autowired
	private UserRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(CrudApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		User[] users = new User[3];
		
		users[0] = new User("Mustapha", "Maouhoub");
		users[1] = new User("Mohamed", "Maouhoub");
		users[2] = new User("Lhoussain", "Maouhoub");
		for(User user : users)
			repository.save(user);
		
		
		
	}
}
