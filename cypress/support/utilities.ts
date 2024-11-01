//Generic Functions
/**
 * This is for clicking any link
 * @param locator of an element
 */
export function clickLink(locator:string){
  cy.get(locator).should('be.visible').click()
}
/**
 * This is for clicking any Button
 * @param locator of an element
 */
export function clickButton(locator:string){
cy.get(locator).should('be.visible').click()
}

/**
 * This is for clicking any Tab
 * @param locator of an element
 */
export function clickTab(locator:string){
 cy.get(locator).should('be.visible').click()
}

/**
 * This is for enter text in to textbox
 * @param locator of input element
 * @param input data to be entered
 */
export function enterText(locator:string,input:string){
 cy.get(locator).should('be.visible').clear().type(input)
}
/**
 * This is for select any radio button
 * @param locator of an element
 */

export function selectRadioButton(locator:string){
  cy.get(locator).should('be.visible').check()
}
/**
 * This is for selecting Checkbox
 * @param locator of an element
 */
export function seclectCheckBox(locator:string){
  cy.get(locator).should('be.visible').check().should('be.checked')
}
/**
 * This is for selecting dropdown value
 * @param locator of an element
 * @param dropdownvalue select dropdown value
 */
export function selectDropDownValue(locator:string,dropdownvalue:string){
  cy.get(locator).should('be.visible').select(dropdownvalue)
}
/**
 * This is for Verify Success Message
 * @param locator of an element
 * @param expectedMessage 
 */
 export function successfullMessage(locator:string,expectedMessage:string){
   cy.get(locator).should('be.visible') // Ensure the message is visible
   .and('contain.text', expectedMessage)
}
/**
 * This is for return success full message
 * @param locator of an element
 * @returns 
 */

export function validMessage(locator:string,expectedMessage:string){
 cy.get(locator).should('be.visible').and('contain.text', expectedMessage);

}
 export function orderNumber(locator:string)  {
    let orderId = ""
    cy.get(locator).should('be.visible').invoke('text').then((orderNumberText) => {
    orderId = orderNumberText.trim();
    cy.log(`Order Number: ${orderId}`);
    expect(orderId).to.exist;
    });
    return orderId;
}
 export function iterateAndClickElement(locator:string,productToClick : string){
    cy.get(locator).then(($products) => {
    const productCount = $products.length;
    console.log(productCount)
    for (let i = 0; i < productCount; i++) {
    const productName = $products.eq(i).find('h2 a').text().trim();
    if (productName === productToClick) {
         cy.wrap($products.eq(i)).find('h2 a').click();
          cy.log(`Clicked on the link for ${productName}`);
          break; 
        }
      }
    })
      
  }
