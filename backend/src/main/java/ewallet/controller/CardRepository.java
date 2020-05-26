package ewallet.controller;

import org.springframework.data.repository.CrudRepository;

import ewallet.model.Card;

public interface CardRepository extends CrudRepository<Card, Integer>{
	
	

}
