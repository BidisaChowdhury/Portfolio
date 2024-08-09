<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'word2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#HT3SMFm( [cm3YdljBz%m`w7y7BEya3)KZa(m*;u!V4}=HV{a(JvqoI?4~kQlb+' );
define( 'SECURE_AUTH_KEY',  '7Z!@Xk-q(?Tg P^UHAJaCPU@f<&,wN3W`?@e5MBX>E#y9/ep?&Ia{TCO83*tKecZ' );
define( 'LOGGED_IN_KEY',    '_=MuQzT!JZ8vHxO,FEjFV%8W9`#nPVa.RubG/@M[qXiOuAyJ~Y)+UBK%cnZXfZn>' );
define( 'NONCE_KEY',        'ZJ`JQ;O<7n`TlHv^e`79%yK1lsvYoh;wyE4<Y{|aF!k+T?w<IIhp64..GFA#DYk0' );
define( 'AUTH_SALT',        'KfrlOq=!tp8C4>ktg]FfDiPq=!2PC&Sm=E;~vH!j{;=:SzIkigxX]4Xft3RWi1(o' );
define( 'SECURE_AUTH_SALT', ',.%N^vVOCPd;ApP>x%4P9=/[[C=xuPdt~wL7Vks(&Mj;$ }W}uFTtM:(Djv!M9m ' );
define( 'LOGGED_IN_SALT',   'Cf<fIQ2B33Kyktil4N4r6<{SBb7Nh<9FGsA(a!3!_8X8,2GF3&Q,/1$/NUz*y@2S' );
define( 'NONCE_SALT',       '=#B=zL:01pi FYRjm&X[<hN`{~gDCn!cpzJD-tG-eE1b}yzq}aL;_c[1r>#e6+`0' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
