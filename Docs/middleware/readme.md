# **Middleware**

## Le _middleware_ est entre l'exécution d'une méthode _dispatch_ est l'envoi de ce dernier. Il se déclenche quand quelque chose est envoyé.  

---

Plus clairement :  
Quand un article est ajouté au panier,
1.  ça appel une méthode '_dispatch_',
2.  puis trigger (déclenche) un middleware,
3. Le middleware va lancer une action (modifier des données, modifier le dispatch, faire un appel asynchrone à une API, changer le rooting, et cætera),
4. puis rappel le dispatch.
