<?php
// This file is generated. Do not modify it manually.
return array(
	'o7-visual-tab-content-vertical-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/o7-visual-tab-content-vertical-block',
		'version' => '0.1.0',
		'title' => 'O7 Visual Tab Content Vertical Block',
		'category' => 'design',
		'icon' => 'smiley',
		'description' => 'Example block scaffolded with Create Block tool.',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'Title'
			),
			'summary' => array(
				'type' => 'string',
				'default' => 'Summary'
			),
			'cardsAmount' => array(
				'type' => 'integer',
				'default' => 1
			),
			'cards' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Card 1',
						'content' => 'Content 1',
						'url' => '',
						'image' => ''
					)
				)
			),
			'footerTitle' => array(
				'type' => 'string',
				'default' => 'Footer Title'
			)
		),
		'supports' => array(
			'html' => true
		),
		'textdomain' => 'o7-visual-tab-content-vertical-block',
		'editorScript' => 'file:./index.js',
		'viewScript' => 'file:./view.js',
		'render' => 'file:./render.php',
		'style' => 'file:./style-index.css'
	)
);
