package test.technique.Projet.Service;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import test.technique.Projet.Entity.Contact;
import test.technique.Projet.Repository.ContactRepository;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService{
    @Autowired
    ContactRepository contactRepository;
    private static final Logger l = LogManager.getLogger(ContactServiceImpl.class);
    @Override
    public List<Contact> getAllContact(){
        List<Contact> contacts=(List<Contact>) contactRepository.findAll();
        for(Contact contact : contacts){
            l.info("contact +++ :" + contact);
        }
        return contacts;
    }
    @Override
    public Contact addContact(Contact contact){
        return contactRepository.save(contact);
    }
    @Override
    public void deleteContact(String id){
        contactRepository.deleteById(Long.parseLong(id));
    }
    public Contact  retrieveContactById(String id){
        return contactRepository.findById(Long.parseLong(id)).get();
    }
    @Override
    public Contact updateContact(Contact contact){
        return contactRepository.save(contact);
    }


}
