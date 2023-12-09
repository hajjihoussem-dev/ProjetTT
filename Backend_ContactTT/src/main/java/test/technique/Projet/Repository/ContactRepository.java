package test.technique.Projet.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import test.technique.Projet.Entity.Contact;


@Repository
public interface ContactRepository extends CrudRepository<Contact, Long> {
}
