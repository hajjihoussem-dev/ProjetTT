package test.technique.Projet.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import test.technique.Projet.Entity.Contact;
import test.technique.Projet.Service.ContactService;

import java.util.List;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping
    public List<Contact> getAllContacts() {
        return contactService.retrieveAllContact();
    }


    @GetMapping("/retrieveContact/{contactId}")
    @ResponseBody
    public Contact retrieveContactById(@PathVariable("contactId") String contactId){
        return contactService.retrieveContactById(contactId);
    }

    @PostMapping("/addContact")
    @ResponseBody
    public Contact addContact(@RequestBody Contact contact)
    {
        contactService.addContact(contact);
        return contact;
    }

    @PutMapping("/updateContact")
    @ResponseBody
    public Contact updateContact(@RequestBody Contact contact){
        return contactService.updateContact(contact);
    }

    @DeleteMapping("/deleteContact/{contactId}")
    @ResponseBody
    public void deleteMessage(@PathVariable("contactId") String contactId){
        contactService.deleteContact(contactId);
    }

}
