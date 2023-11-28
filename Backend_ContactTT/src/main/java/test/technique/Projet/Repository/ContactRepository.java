package test.technique.Projet.Repository;

import org.springframework.data.repository.CrudRepository;
import test.technique.Projet.Entity.Contact;

public interface ContactRepository extends CrudRepository<Contact, Long> {
}
