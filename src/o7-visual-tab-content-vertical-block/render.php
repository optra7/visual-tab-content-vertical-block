<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<?php
if (!empty($attributes['cards'])) {
  $cards = $attributes['cards'];
}
if (!empty($attributes['title'])) {
  $title = $attributes['title'];
}
if (!empty($attributes['summary'])) {
  $summary = $attributes['summary'];
}
if (!empty($attributes['footerTitle'])) {
  $footerTitle = $attributes['footerTitle'];
}
?>

<section <?php echo get_block_wrapper_attributes(); ?> class='o7__visual-tab-content-vertical-section'>
  <div class='o7__visual-tab-content-vertical-section-container'>

    <div class='o7__visual-tab-content-list'>
      <h2 class='o7__visual-tab-content-title'> <?php echo esc_html($title); ?></h2>
      <p class='o7__visual-tab-content-summary'> <?php echo esc_html($summary); ?></p>

      <div class='o7__visual-tab-content-item-container'>
        <?php
        foreach ($cards as $index => $card):
        ?>
          <a href="<?php echo esc_url($card['url']); ?>" class='o7__visual-tab-content-single-item-link'>
            <div class='o7__visual-tab-content-item-single-heading-container'>
              <b class='o7__visual-tab-content-item-single-heading-title'><?php echo esc_html($card['title']); ?></b>
              <span class='o7__visual-tab-content-single-item-heading-arrow'>
                &gt;
              </span>
            </div>
            <p class='o7__visual-tab-content-single-item-summary'>
              <?php echo esc_html($card['content']); ?>
            </p>
          </a>
        <?php endforeach; ?>
      </div>

      <div class='o7__visual-tab-content-item-footer-container'>
        <a href='#' class='o7__visual-tab-content-item-footer-link'>
          <div class='o7__visual-tab-content-item-single-footer-container'>
            <span class='o7__visual-tab-content-item-single-footer-title'>
              <?php echo esc_html($footerTitle); ?>
            </span>
            <span class='o7__visual-tab-content-single-item-footer-arrow'>
              &gt;
            </span>
          </div>
        </a>
      </div>
    </div>

    <div class='o7__visual-tab-content-item-images-wrap'>
      <?php foreach ($cards as $index => $card):  ?>
        <div key={index} class='o7__visual-tab-content-item-image-wrapper'>
          <img
            src=<?php echo esc_url($card['image']); ?>
            alt='Card Image <?php echo $index + 1; ?>'
            class='o7__visual-tab-content-item-image' />
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>