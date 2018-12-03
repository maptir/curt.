import { Selector } from 'testcafe';

fixture `Checkout`
    .page `http://localhost:3000/`;

test('New Test 1', async t => {
    await t
        .click(Selector('.sc-jWBwVP.jphukP'))
        .typeText(Selector('.sc-bxivhb.fVdtmn').find('[name="username"]'), 'curt@ku.th')
        .pressKey('tab')
        .typeText(Selector('.sc-bxivhb.fVdtmn').find('[name="password"]'), '123456')
        .pressKey('enter')
        .click(Selector('.sc-gipzik.hScIHS').find('a').withText('MEN'))
        .click(Selector('.img-fluid.sc-jhAzac.eekHTm').find('a').withText('SHOP NOW'))
        .click(Selector('.btn.btn-dark.sc-cIShpX.kaKjPk'))
        .click(Selector('button').withText('ADD TO CART'))
        .click(Selector('.sc-eHgmQL.DPTOu').find('div').withText('CART'))
        .click(Selector('button').withText('CHECK OUT'))
        .typeText(Selector('.sc-cmthru.fuyTzL').find('.sc-hMFtBS.dYWPOj'), 'Test')
        .typeText(Selector('.sc-cLQEGU.bqcucS'), 'Test address')
        .typeText(Selector('div').withText('District').nth(5).find('.sc-hMFtBS.dYWPOj'), 'test')
        .click(Selector('.sc-cMhqgX.hNSrKe'))
        .typeText(Selector('div').withText('Country').nth(5).find('.sc-hMFtBS.dYWPOj'), 'test')
        .typeText(Selector('div').withText('Postal Code').nth(5).find('.sc-hMFtBS.dYWPOj'), '123456')
        .typeText(Selector('div').withText('Customer Contact').nth(4).find('.sc-hMFtBS.dYWPOj'), '0999999999')
        .click(Selector('button').withText('CONTINUE TO PAYMENT METHOD'))
        .click(Selector('.m-1').find('div').withText('Credit Card Payment'))
        .click(Selector('.m-1').find('.mr-1'))
        .typeText(Selector('.sc-cmthru.fuyTzL').find('.sc-hMFtBS.dYWPOj'), '1234567891231234')
        .click(Selector('div').withText('Card Holder Number').nth(5).find('.sc-hMFtBS.dYWPOj'))
        .typeText(Selector('div').withText('MM').nth(5).find('.sc-hMFtBS.dYWPOj'), '10/20')
        .pressKey('tab')
        .typeText(Selector('div').withText('CVV').nth(5).find('.sc-hMFtBS.dYWPOj'), '233')
        .typeText(Selector('div').withText('Card Holder Number').nth(5).find('.sc-hMFtBS.dYWPOj'), '12345')
        .typeText(Selector('div').withText('Customer Email').nth(4).find('.sc-hMFtBS.dYWPOj'), 'test')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .pressKey('backspace')
        .typeText(Selector('div').withText('Customer Email').nth(4).find('.sc-hMFtBS.dYWPOj'), 'curt@ku.th')
        .click(Selector('button').withText('CONTINUE TO CONFIRMATION'))
        .click(Selector('button').withText('CONFIRM ORDER'))
        .click(Selector('a').withText('HOME'));
});