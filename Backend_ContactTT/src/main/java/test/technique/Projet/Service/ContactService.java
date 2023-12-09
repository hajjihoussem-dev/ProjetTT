package test.technique.Projet.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.technique.Projet.Entity.Contact;
import test.technique.Projet.Repository.ContactRepository;

import java.util.List;


public interface ContactService{
    List<Contact> retrieveAllContact();
    Contact addContact(Contact contact);
    void deleteContact(String id);
    Contact  retrieveContactById(String id);
    Contact updateContact(Contact contact);

}
