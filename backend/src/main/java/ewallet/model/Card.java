package ewallet.model;

import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Card {
	
	@Id
	private int id;
	private String cardNumber;
	private String name;

    private String valThru;
    private int ccv;
    private String vendor;
    private String chip;
    
    @Embedded
    private Colors colors;
	
	
	public Card() {
		
	}


	public Card(int id, String cardNumber, String name, String valThru, int ccv, String vendor, String chip,
			Colors colors) {
		super();
		this.id = id;
		this.cardNumber = cardNumber;
		this.name = name;
		this.valThru = valThru;
		this.ccv = ccv;
		this.vendor = vendor;
		this.chip = chip;
		this.colors = colors;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getCardNumber() {
		return cardNumber;
	}


	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getValThru() {
		return valThru;
	}


	public void setValThru(String valThru) {
		this.valThru = valThru;
	}


	public int getCcv() {
		return ccv;
	}


	public void setCcv(int ccv) {
		this.ccv = ccv;
	}


	public String getVendor() {
		return vendor;
	}


	public void setVendor(String vendor) {
		this.vendor = vendor;
	}


	public String getChip() {
		return chip;
	}


	public void setChip(String chip) {
		this.chip = chip;
	}


	public Colors getColors() {
		return colors;
	}


	public void setColors(Colors colors) {
		this.colors = colors;
	}
	

}
