// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import 'cypress-xpath';
import '@4tw/cypress-drag-drop'
import { addMatchImageSnapshotCommand } from '@simonsmith/cypress-image-snapshot/command'

addMatchImageSnapshotCommand()

before(() => {
  cy.log('this is global before');
})

beforeEach(() => {
//   if(process.env.isMobile) {
//     const mobileHeaders = {
//         userAgent : 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'
//     }
//     cy.visit(url, {...mobileHeaders})
//   }  
  cy.log('Global before each')
})

// Alternatively you can use CommonJS syntax:
// require('./commands')