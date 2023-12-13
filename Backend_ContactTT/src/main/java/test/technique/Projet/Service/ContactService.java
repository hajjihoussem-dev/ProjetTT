package test.technique.Projet.Service;

import test.technique.Projet.Entity.Contact;

import java.util.List;


public interface ContactService{
    List<Contact> getAllContact();
    Contact  addContact(Contact contact);
    void deleteContact(String id);
    Contact  retrieveContactById(String id);
    Contact updateContact(Contact contact);

}
