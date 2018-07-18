<?php
/*Plugin Name: krunners
Description: Plugin for runners registration and displace.      
Version: 1.0
Author: Calvin Ko and Anthony Ko
Author URI: http://www.kosolution.net
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wporg
Domain Path:  /languages
*/


function hook_krunners_jscript() {
    ?>
        <script>
             function krunners_submit_1() {
                 console.log("krunners submit 1");
             }
        </script>
    <?php
}

function krunners_add_js() {
    wp_enqueue_script('krunners_scripts', plugins_url('js/krunners.js', __FILE__), array('jquery'));
}


//add_action( 'widgets_init', 'ko_register_krunners' );
add_action( 'wp_head', 'hook_krunners_jscript');
add_action( 'wp_enqueue_scripts', 'krunners_add_js');
?>
