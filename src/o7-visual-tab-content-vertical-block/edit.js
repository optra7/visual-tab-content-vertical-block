/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 * 
 */
import { useState } from 'react';

import { PanelBody, TextControl, Button, Panel, } from '@wordpress/components';

import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes }) {
	const { cards, title, summary, footerTitle } = attributes;
	const [activePanelIndex, setActivePanelIndex] = useState(0);
	const [activeCardIndex, setActiveCardIndex] = useState(0);

	// EXPERIMENTAL
	// USE_LATER
	function setValueForOnChange(value, fieldName) {
		let tempCards = [...cards];
		tempCards[index][fieldName] = value;
		setAttributes({
			cards: tempCards
		})
	}
	return (
		<>
			{/* Main Editor UI */}
			<InspectorControls>
				<Panel>
					<PanelBody title={'Settings'} initialOpen={true}>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={'Title'}
							value={title || ''}
							onChange={(value) => {
								setAttributes({
									title: value
								})
							}}
						/>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={'Summary'}
							value={summary || ''}
							onChange={(value) => {
								setAttributes({
									summary: value
								})
							}}
						/>
						<Button
							variant='primary'
							onClick={() => {
								setAttributes({
									cards: [...cards, { title: 'Title', content: 'Content' }],
								})
							}}
						>
							Add Cards
						</Button>
					</PanelBody>
				</Panel>
				{
					cards.map((card, index) => (
						<Panel>
							<PanelBody title={'Card ' + (index + 1)} initialOpen={activeCardIndex === index} opened={activeCardIndex === index}  // Open only if this panel is active
								onToggle={() => {
									setActiveCardIndex(index);
								}}>
								<Button
									variant='primary'
									onClick={() => {
										let tempCards = [...cards];
										tempCards.splice(index, 1);
										setAttributes({
											cards: tempCards
										})
									}}
								>
									Delete Card {index + 1}
								</Button>
								<TextControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={'Title'}
									value={card.title || ''}
									onChange={(value) => {
										let tempCards = [...cards];
										tempCards[index].title = value;
										setAttributes({
											cards: tempCards
										})
									}}
								/>
								<TextControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={'Content'}
									value={card.content || ''}
									onChange={(value) => {
										let tempCards = [...cards];
										tempCards[index].content = value;
										setAttributes({
											cards: tempCards
										})
									}}
								/>
								<TextControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={'URL'}
									value={card.url || '#'}
									onChange={(value) => {
										let tempCards = [...cards];
										tempCards[index].url = value;
										setAttributes({
											cards: tempCards
										})
									}}
								/>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) => {
											let tempCards = [...cards];
											tempCards[index].image = media.url;
											setAttributes({ cards: tempCards });
										}}
										allowedTypes={['image']}
										value={card.image}
										render={({ open }) => (
											<Button onClick={open}>
												{card.image ? 'Change Image' : 'Select Image'}
											</Button>
										)}
									/>
								</MediaUploadCheck>
							</PanelBody>
						</Panel>
					))
				}
				<Panel>
					<PanelBody title={'Footer'} initialOpen={true}>
						<TextControl
							__nextHasNoMarginBottom
							__next40pxDefaultSize
							label={'Footer Title'}
							value={footerTitle || ''}
							onChange={(value) => {
								setAttributes({
									footerTitle: value
								})
							}}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			{/*End of Main Editor UI */}

			{/* Canvas Rendered DOM elements */}
			<section {...useBlockProps()} class='o7__visual-tab-content-vertical-section'>
				<div class='o7__visual-tab-content-vertical-section-container'>

					<div class='o7__visual-tab-content-list'>
						<h2 class='o7__visual-tab-content-title'> {title}</h2>
						<p class='o7__visual-tab-content-summary'>{summary}</p>
						<div class='o7__visual-tab-content-item-container'>
							{
								cards.map((card, index) => (<a href={card.url} className={'o7__visual-tab-content-single-item-link ' + (index === activeCardIndex ? 'active' : '')} onMouseEnter={() => { setActiveCardIndex(index); }}>
									<div class='o7__visual-tab-content-item-single-heading-container'>
										<b class='o7__visual-tab-content-item-single-heading-title'>{card.title}</b>
										{index === activeCardIndex && (
											<span class='o7__visual-tab-content-single-item-heading-arrow'>
												{'>'}
											</span>
										)}
									</div>
									{index === activeCardIndex && (
										<p class='o7__visual-tab-content-single-item-summary'>
											{card.content}
										</p>
									)}
								</a>))
							}
						</div>

						<div class='o7__visual-tab-content-item-footer-container'>
							<a href='#' class='o7__visual-tab-content-item-footer-link'>
								<div class='o7__visual-tab-content-item-single-footer-container'>
									<span class='o7__visual-tab-content-item-single-footer-title'>
										{footerTitle}
									</span>
									<span class='o7__visual-tab-content-single-item-footer-arrow'>
										<img alt='>' width='' height='' src='#' />
									</span>
								</div>
							</a>
						</div>
					</div>

					<div class='o7__visual-tab-content-item-images-wrap'>
						{cards.map((card, index) => (
							<div key={index} className='o7__visual-tab-content-item-image-wrapper'>
								<img
									src={card.image}
									alt={`Card Image ${index + 1}`}
									className={'o7__visual-tab-content-item-image ' + (index === activeCardIndex ? 'active' : '')}
									style={{ maxWidth: '100%', height: 'auto' }}
								/>

							</div>
						))}
					</div>

				</div>
			</section>
			{/*End of Canvas Rendered DOM elements */}
		</>
	);
}
