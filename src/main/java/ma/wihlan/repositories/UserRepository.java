package ma.wihlan.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.wihlan.enteties.User;

public interface UserRepository extends JpaRepository<User, Long>{

}
