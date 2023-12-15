package test.technique.Projet.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import test.technique.Projet.Entity.Contact;
import test.technique.Projet.Service.ContactService;

import java.util.List;


@RestController
@RequestMapping("/contact")
public class ContactController {
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @Autowired
    private ContactService contactService;

    @GetMapping("/getAllContact")
    @ResponseBody
    public List<Contact> getContactList(){
        List<Contact> listContact= contactService.getAllContact();
        return listContact;
    }

    @GetMapping("/getContact/{id}")
    @ResponseBody
    public Contact retrieveContactById(@PathVariable("id") String contactId){
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

    @DeleteMapping("/deleteContact/{id}")
    @ResponseBody
    public void deleteMessage(@PathVariable("id") String contactId){
        contactService.deleteContact(contactId);
    }

}
