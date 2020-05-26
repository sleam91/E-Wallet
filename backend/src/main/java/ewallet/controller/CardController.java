package ewallet.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import ewallet.model.Card;

@RestController
public class CardController {
	
	@Autowired
	private CardService cardService;
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping("/cards")
	public List<Card> getAllCards() {
		return cardService.getAllCards();
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping("/cards/{id}")
	public Card getCard(@PathVariable int id) {
		return cardService.getCard(id);
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping(method = RequestMethod.POST, value="/cards")
	public void addCard(@RequestBody Card card) {
		cardService.addCard(card);
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping(method = RequestMethod.PUT, value="/cards/{id}")
	public void updateCard(@RequestBody Card card, @PathVariable int id) {
		cardService.updateCard(id, card);
	}
	
	@CrossOrigin(origins = "http://localhost:8081")
	@RequestMapping(method = RequestMethod.DELETE, value="/cards/{id}")
	public void deleteCard(@PathVariable int id) {
		cardService.deleteCard(id);
	}

	
}
