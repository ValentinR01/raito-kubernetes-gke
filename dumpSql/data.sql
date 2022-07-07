SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+02:00";


--
-- Base de données : `Raito`
--

CREATE DATABASE IF NOT EXISTS Raito;
USE Raito;

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` smallint(6) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Eau'),
(2, 'Oiseaux'),
(3, 'Foret'),
(4, 'Feu'),
(5, 'Ambiance');

-- --------------------------------------------------------

--
-- Structure de la table `content`
--

CREATE TABLE `content` (
  `id` int(11) NOT NULL,
  `title` varchar(30) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_user_role` int (5) NOT NULL,
  `id_category` int(11) NOT NULL,
  `id_type` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL,
  `duration_creation` smallint(6) NOT NULL,
  `voice_creation` varchar(40) DEFAULT NULL,
  `rise_duration` tinyint(4) DEFAULT NULL,
  `fall_duration` tinyint(4) DEFAULT NULL,
  `hight_intensity` tinyint(4) DEFAULT NULL,
  `low_intensity` tinyint(4) DEFAULT NULL,
  `color` varchar(6) DEFAULT NULL,
  `music` varchar(40) DEFAULT NULL,
  `picture` varchar(40) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `note` decimal(3,1) DEFAULT NULL,
  `nb_note` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `content_type`
--

CREATE TABLE `content_type` (
  `id` tinyint(4) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `content_type`
--

INSERT INTO `content_type` (`id`, `name`) VALUES
(1, 'Exercice'),
(2, 'Ambiance');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(75) DEFAULT NULL,
  `password` varchar(120) DEFAULT NULL,
  `id_role` tinyint(4) DEFAULT NULL,
  `nb_creation` smallint(6) DEFAULT NULL,
  `date_inscription` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `user_role`
--

CREATE TABLE `user_role` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `user_role`
--

INSERT INTO `user_role` (`id`, `name`) VALUES
(1, 'User'),
(2, 'Premium'),
(3, 'Partner'),
(4, 'Admin');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `content`
--
ALTER TABLE `content`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `content_type`
--
ALTER TABLE `content_type`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user_role`
--
ALTER TABLE `user_role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `content`
--
ALTER TABLE `content`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `content_type`
--
ALTER TABLE `content_type`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `user_role`
--
ALTER TABLE `user_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
