	<div class="container-fluid">
		<section id="content" class="page-content">
			<div class="container text-center">
				<h2>Inscription</h2>
				<form method="post" action="inscription.php" enctype="multipart/form-data">
							<label class="labelI" for="password">*Mot de Passe :</label><input type="password" name="password" id="password" placeholder="Mot de passe"/>
							<label class="labelI" for="confirm">*Confirmer :</label><input type="password" name="confirm" id="confirm" placeholder="Confirmation"/><br>
						</fieldset>
							<label class="labelI" for="email">*Votre adresse email :</label><br><input type="email" name="email" id="email" placeholder="email@mail.fr"/><br>
						</fieldset>
							<label class="labelI" for="prenom">Prenom :</label><br><input type="text" name="prenom" id="prenom" placeholder="Prénom"/><br>
							<label class="labelI" for="nom">Nom :</label><br><input type="text" name="nom" id="nom" placeholder="Nom"/><br>
							<label class="labelI" for="sexe">Sexe :</label><br>
							<div><input type="radio" id="femme" name="sexe" value="FEMME" checked><label for="femme">Femme</label>
    						<input type="radio" id="homme" name="sexe" value="HOMME"><label for="homme">Homme</label></div>
							<label class="labelI" for="age">Age :</label><br><input type="number" name="age" id="age" min="5" max="90" placeholder="Age"/><br>
						<fieldset><legend class="colorbold marg3 pad1">IMAGE</legend>
							<label for="avatar">Choisissez votre photo :</label><br><input type="file" name="avatar" id="avatar" accept="image/*" /><br>
						</fieldset><br>
						<p class="btns"><input type="submit" value="S'inscrire" class="button-3"/></p><br>
						<p>Les champs précédés d'un * sont obligatoires</p>
				</form>
			</div>
		</section>
	</div>