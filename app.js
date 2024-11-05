 

const envelope = $('.envelope');

function pullOut() {
    return new TimelineMax()
        .to('.flap', 1, { rotationX: 180, ease: Power1.easeInOut }, 'scaleBack')
        .to('.invitation', 1, { scale: 0.8, ease: Power4.easeInOut }, 'scaleBack')
        .set('.flap', { zIndex: 0 })
        .to('.card', 1, { y: '0%', scaleY: 1.2, ease: Circ.easeInOut })
        .set('.mask', {
            'clip-path': 'inset(0 0 0 0)',
            onComplete: function() {
                envelope.toggleClass('is-open');
            }
        })
        .to('.mask', 1.3, { 'clip-path': 'inset(0 0 0% 0)', ease: Circ.easeInOut }, 'moveDown')
        .to('.card', 1.3, { y: '100%', scaleY: 1, ease: Circ.easeInOut }, 'moveDown')
        .add(() => {
            $('#wedding-invitation').hide();  // Hide the invitation section
            $('.details').show();  // Show the details section
            $('body').css('overflow-y', 'auto');  // Enable body overflow for scrolling
        }, '+=1');  // Optional delay before showing details
}

// Automatically call pullOut on page load
$(document).ready(function() {
    pullOut();
});


 


