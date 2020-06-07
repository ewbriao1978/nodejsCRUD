-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 08/06/2020 às 00:02
-- Versão do servidor: 10.4.6-MariaDB
-- Versão do PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `nodejsDB`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `customers`
--

CREATE TABLE `customers` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `passwd` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Despejando dados para a tabela `customers`
--

INSERT INTO `customers` (`id`, `name`, `email`, `passwd`, `created_at`, `updated_at`) VALUES
(8, '11111', 'eduardo.briao1233@gmail.com', '6d6354ece40846bf7fca65dfabd5d9d4', '2020-06-03 21:27:32', '2020-06-03 21:27:32'),
(10, 'teste', 'teste@teste.tst', '6d6354ece40846bf7fca65dfabd5d9d4', '2020-06-03 22:11:40', '2020-06-03 22:11:40'),
(11, 'Lottar Matheus', 'lothar@lothar.com', 'e10adc3949ba59abbe56e057f20f883e', '2020-06-05 20:49:35', '2020-06-05 20:49:35'),
(12, 'teste1', 'teste1@teste1.com.br', 'e959088c6049f1104c84c9bde5560a13', '2020-06-07 21:07:31', '2020-06-07 21:07:31'),
(13, 'Eduardo Wenzel Brião', 'eduardo.briao@gmail.com', '6d6354ece40846bf7fca65dfabd5d9d4', '2020-06-07 21:54:28', '2020-06-07 21:54:28');

-- --------------------------------------------------------

--
-- Estrutura para tabela `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `customer_id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double(15,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Despejando dados para a tabela `orders`
--

INSERT INTO `orders` (`id`, `customer_id`, `description`, `amount`, `created_at`, `updated_at`) VALUES
(4, 2, 'TV 50 LED', 10.00, '2020-05-14 20:57:18', '2020-05-22 23:35:39'),
(7, 2, 'Iphone', 2.00, '2020-05-14 21:57:44', '2020-05-14 21:57:44'),
(8, 2, 'Notebooks', 6.00, '2020-05-14 21:58:07', '2020-05-14 21:58:07'),
(9, 2, 'External HDs', 15.00, '2020-05-15 14:59:46', '2020-05-15 14:59:46'),
(10, 10, 'Camera HD', 2.00, '2020-05-15 19:44:20', '2020-05-15 19:44:20'),
(12, 5, 'Doll Barbie', 10.00, '2020-05-15 21:27:39', '2020-05-15 21:27:39'),
(13, 5, 'Little mommy', 24.00, '2020-05-15 21:27:55', '2020-05-15 21:27:55'),
(15, 2, 'TESTE10', 100.00, '2020-05-22 23:40:51', '2020-05-22 23:40:51');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_customer_id_foreign` (`customer_id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `customers`
--
ALTER TABLE `customers`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de tabela `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `order_customer_id_foreign` FOREIGN KEY (`customer_id`) REFERENCES `customersOLD` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
