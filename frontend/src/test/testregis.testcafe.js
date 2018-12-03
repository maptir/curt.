import { Selector } from 'testcafe';

fixture `testRegis`
    .page `localhost:3000`;

test('New Test 1', async t => {
    await t
        .click(Selector('a').withText('REGISTER'))
        .typeText(Selector('.sc-kPVwWT.hAklSC[name="firstName"]'), 'got')
        .pressKey('tab')
        .typeText(Selector('.sc-kPVwWT.hAklSC[name="lastName"]'), 'sira')
        .pressKey('tab')
        .click(Selector('.sc-dfVpRl.chREDL'))
        .click(Selector('.sc-esjQYD.bZYylg').nth(0))
        .typeText(Selector('.sc-kPVwWT.hAklSC[name="email"]'), 'got@gmail.com')
        .pressKey('tab')
        .typeText(Selector('.sc-kPVwWT.hAklSC[name="password"]'), '123456')
        .pressKey('tab')
        .typeText(Selector('.sc-kPVwWT.hAklSC[name="password2"]'), '123456')
        .click(Selector('button').withText('Sign Up'))
        .click(Selector('.sc-jWBwVP.jphukP'))
        .typeText(Selector('.sc-bxivhb.fVdtmn').find('[name="username"]'), 'got@gmail.com')
        .pressKey('tab')
        .typeText(Selector('.sc-bxivhb.fVdtmn').find('[name="password"]'), '123456')
        .click(Selector('button').withText('Login'));
});