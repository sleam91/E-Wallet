package ewallet.model;

import javax.persistence.Embeddable;

@Embeddable
public class Colors {
	
    private String backgroundColor;
    private String color;
    
	public Colors() {
	}
	public Colors(String backgroundColor, String color) {
		this.backgroundColor = backgroundColor;
		this.color = color;
	}
	
	public String getBackgroundColor() {
		return backgroundColor;
	}
	public void setBackgroundColor(String backgroundColor) {
		this.backgroundColor = backgroundColor;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
    
    

}
