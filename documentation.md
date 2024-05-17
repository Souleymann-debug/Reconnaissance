# Reconnaissance de texte et d'image de documents d'identité

## Installation
1. Installer Python version supérieure à 3.9.
2. Télécharger Tesseract à partir du lien suivant : [Tesseract GitHub](https://github.com/UB-Mannheim/tesseract/wiki).
3. Ajouter Tesseract au chemin d'accès de la variable d'environnement PATH.
4. Exécuter la commande suivante pour installer les dépendances Python nécessaires :

```shell
pip install -r requirements.txt
```

## Lancement
Une fois que Tesseract est installé et les dépendances Python sont installées :

1. Assurez-vous que vous avez les images de documents d'identité dans un dossier accessible. Dans le script ocr.py, veuillez indiquer le chemin d'accès vers l'image: par exemple, PATH_TO_IMG = './test_images/cni_fr_1.jpg'
2. Exécutez le script principal `reconnaissance.py` à l'aide de la commande suivante :

```shell
python reconnaissance.py
```

Le script va automatiquement traiter les images de documents d'identité dans le dossier spécifié et extraire le texte et les informations pertinentes.

N'oubliez pas de vérifier les résultats générés et d'effectuer toute action supplémentaire requise en fonction des besoins de votre application.

N'hésitez pas à explorer et à ajuster les paramètres du script pour répondre à vos besoins spécifiques.

---
Assurez-vous d'avoir correctement configuré l'environnement avant de lancer le script de reconnaissance de texte et d'image de documents d'identité. Suivez les instructions d'installation et de lancement ci-dessus pour obtenir les meilleurs résultats.

Bonne reconnaissance de texte et d'image de cartes d'identité !