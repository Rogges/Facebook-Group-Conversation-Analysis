var click_polarity, text1, text2;
click_polarity = 0;
text1 = "Thannoj, Kishan, Harris, and Javed";
text2 = document.querySelector('.insight').textContent;

document.querySelector('.insight').addEventListener('click', function() {
    if (click_polarity == 0) {
        document.querySelector('.insight').textContent = text1;
        click_polarity = 1;
    } else {
        document.querySelector('.insight').textContent = text2;
        click_polarity = 0;
    }
});

