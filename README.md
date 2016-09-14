
# Angular 2 Anagrafica Form

Il progetto contiene
* operazioni CRUD su AWS
* autenticazione tramite Cognito (CUP)

Il progetto utilizza
* nuovo @NgModule decorator per inizializzare app (RC6)
* bootstrap v4 dev
* angular2 router (RC6 - completamente diverso da precedenti)
* angular2 form e validazione
* SDK di AWS per Cognito JS
* SDK di AWS API GW per Javascript


```bash
git clone https://github.com/MaxwellGroup/dev2ui3
cd dev2ui3
# installare i moduli nodejs
npm install
# compilare in modalita watch
npm run tsc:w
# lanciare webserver di sviluppo in modalita reload
npm run lite

```

## Preparazione macchina Ubuntu/Debian
```bash
# operazioni da fare solo la prima volta a macchina 'nuova' (fino a FINE S.O.)
# update o.s.
sudo apt-get update
sudo apt-get upgrade
# installare nodejs, npm(automatico) e typings
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install typings --global
# Using Debian, as root
curl -sL https://deb.nodesource.com/setup_6.x | bash -
apt-get install -y nodejs
sudo npm install typings --global
# ################# FINE S.O.

# compilazione ed esecuzione app (da fare ad ogni clone)
# download moduli
npm install
typings install
# compilare in modalita watch
npm run tsc:w
# lanciare webserver di sviluppo in modalita reload
npm run lite

```


## Cognito User Pool (CUP)

CUP e' un authorization provider come FB, G+.

* Nella Demo e' stato utilizzato mixerPool. Potete creare qualsiasi pool ed associarlo al servizio.
* Un Servizio puo' avere N CUP associati.
* Per creare un Pool basta andare sotto Cognito>User Pool
* gli utenti possono essere importati in CSV oppure creati tramite API

## Utenze Cognito User Pool (CUP)

Utenti del pool mixerPool (a scopo demo):
* user1,password123
* user2,password123
* user3,password123

## Come collegare il CUP ad AWS Gw e al Federated Identity Pool 

* bisogna legare il CUP al servizio (API Gw) che vogliamo autenticare tramite questo meccanismo
* Nel servizio richiesto posizionarsi su Authorizers e cliccare 'Create CUP Authorizer'. Adesso il servizio ha degli autenticatori.
* Nel servizio richiesto posizionarsi su Resources e, in Authorization Settings, selezionare (da droplist) il pool precedentemente creato. Adesso il metodo e' legato al pool.
* ripetere lo step precedente per tutti le risorse/metodi interessati

Il Federated Pool (ad es. DominoApp) ci serve per ottenere un token a prescindere dal Authorization Provider (FB, G+, CUP).
* Aprire in editing il FIP di interesse (DominoApp)
* Selezionare Authentication providers>Cognito
* aggiungere un nuovo provider riportando User Pool ID (v. proprieta' CUP creato in precedenz) e App Client ID (v. proprieta' CUP creato in precedenz)

## TODO

* signOut()
* refactoring servizio di autenticazione e migliroamento integrazione AWS SDK
