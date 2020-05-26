package ewallet.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ewallet.model.Card;

@Service
public class CardService {

	@Autowired
	private CardRepository cardRepository;

	public List<Card> getAllCards() {
		List<Card> topics = new ArrayList<>();
		cardRepository.findAll().forEach(topics::add);
		return topics;
	}

	public Card getCard(int id) {
		return cardRepository.findById(id).get();

	}

	public void addCard(Card card) {
		cardRepository.save(card);

	}

	public void updateCard(int id, Card card) {
		cardRepository.save(card);
	}

	public void deleteCard(int id) {
		cardRepository.deleteById(id);

	}

}
