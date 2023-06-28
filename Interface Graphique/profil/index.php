		<div class="container-fluid">
			<section id="content" class="page-content">
				<div class="container text-center">
					<h2>Information Carte National Identité</h2><br>
					<strong>Image</strong><br>
					<img src=".<?php echo $data['imageeleve']; ?>" alt="" /><br><br>
					<p class="text-2" >
						<strong>Numéro</strong><br>
						<?php echo stripslashes(htmlspecialchars($data['adressemail'])); ?><br/>
						<strong>Prénom</strong><br>
						<?php echo stripslashes(htmlspecialchars($data['prenom'])); ?><br>
						<strong>Nom</strong><br>
						<?php echo stripslashes(htmlspecialchars($data['nom'])); ?><br>
						<strong>Date de naissance</strong><br>
						<?php echo stripslashes(htmlspecialchars($data['age'])); ?><br>
					</p>
					</div>
			</section>
		</div>