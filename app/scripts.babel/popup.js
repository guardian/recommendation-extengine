'use strict';

console.log('\'Allo \'Allo! Popup');

var id = '56f2fb13d4f5ca1daeafb8c3'
var url = 'https://localhost:5000/doc/' + id + '/most_similar'
console.log('url', url)

$.ajax({
  url: 'http://localhost:5000/doc/' + id + '/most_similar',
  type: 'GET',
  contentType: 'application/json',
  success: function(data, status, jqhxr) {
    var docs = data.most_similar.map(d => '<div class="rec">' + d.title + '</div>')
    $('#recs').html("")
    $('#recs').html(docs.join('<br>'))

    /*
      html : "<p>Homosexuals have a nose for each other, according to new research published in Psychological Science. </p> <p>Scientists in Philadelphia collected samples of underarm sweat from 24 donors of &quot;varied gender and sexual orientation&quot; and then asked 82 heterosexual and homosexual men and women to test them for any potential appealing qualities. The results revealed a divide. Gay men and lesbians showed preferences that were not those of heterosexuals of either sex. Gay men preferred the scent of gay men and heterosexual women. But, in turn, the scent of gay men was the least preferred by heterosexual men and women and by lesbians. </p> <p>&quot;Our findings support the contention that gender preference has a biological component that is reflected in both the production of different body odours and in the perception of and response to body odours,&quot; said Charles Wysocki of the Monell Chemical Senses Centre. </p> <p>On the same day, the prestigious journal proceedings of the National Academy of Sciences published slightly more substantial research into what it is about male sweat that might trigger a response in the brains of gay men and heterosexual women. </p> <p>Swedish scientists established in an earlier piece of research that the hypothalamus region of the brain became activated when men detected an oestrogen steroid known as EST, and women&apos;s brains in turn lit up when they got a whiff of a testosterone derivative known to biochemists as AND. </p> <p>In the latest study, they went further: they used brain imaging equipment to test the responses of homosexual men and heterosexual men and women, to EST, AND and other smells such as lavender. AND set the hypothalamus alight in homosexual men and heterosexual women; EST worked for heterosexual men alone. </p> <p>So the research shows that the human brain responds differently to these potential pheromones (pheromones are the agencies of attraction in the animal world, but nobody is very sure that human love and desire is so simply mediated) and that there could be a link between sexual orientation and brain function. </p> <p>But all research into the biology of sexual orientation ends up pivoting on phrases such as &quot;could be&quot;. Humans are complex and human desires are even more so. Is homosexuality a product of the genes and therefore inherited from parents and grandparents? Is it something influenced by development early in life, in the mother&apos;s womb, or in the first traumatic years of infancy? Do society, tradition and culture play a part? Or are all humans potential victims of love in varying forms? </p> <p>More than a decade ago, a scientist at the US National Cancer Institute was convinced that he had established a link between a length of chromosome inherited from the mother and overt homosexuality. At the time, others pointed out that he might have found a gene for being forthright, or a gene for collecting Judy Garland records. </p> <p>One neuroscientist had claimed to have detected a difference between gay and &quot;straight&quot; brains. Another one, in 1998, suggested that bisexual women had a slightly different inner ear structure from heterosexual women. Others neuroscientists have been more cautious. Several studies of finger length - the relationship between the ring and the index fingers - have been invoked as predictors of homosexual and straight behaviour, but they have also been invoked to predict whether someone might be good at football or not. </p> <p>A Canadian team showed in 2000 that gay men and lesbians were more likely to be left-handed than heterosexuals of either sex. But all of this research is about tendencies and probabilities, rather than some biological divide. A team in Oregon last year reported that they had detected a difference between rams that preferred ewes and rams that preferred each other. The difference, they reported, was in the hypothalamus. But there are only so many questions you can ask a sheep. For the moment, love remains as mysterious as ever.</p> <p><strong>·</strong> Tim Radford is the Guardian&apos;s science editor</p>"
      id : "56f2e610d4f5ca1daeaa2c5d"
      similarity : 0.6607093811035156
      text : "Homosexuals have a nose for each other, according to new research published in Psychological Science. Scientists in Philadelphia collected samples of underarm sweat from 24 donors of "varied gender and sexual orientation" and then asked 82 heterosexual and homosexual men and women to test them for any potential appealing qualities. The results revealed a divide. Gay men and lesbians showed preferences that were not those of heterosexuals of either sex. Gay men preferred the scent of gay men and heterosexual women. But, in turn, the scent of gay men was the least preferred by heterosexual men and women and by lesbians. "Our findings support the contention that gender preference has a biological component that is reflected in both the production of different body odours and in the perception of and response to body odours," said Charles Wysocki of the Monell Chemical Senses Centre. On the same day, the prestigious journal proceedings of the National Academy of Sciences published slightly more substantial research into what it is about male sweat that might trigger a response in the brains of gay men and heterosexual women. Swedish scientists established in an earlier piece of research that the hypothalamus region of the brain became activated when men detected an oestrogen steroid known as EST, and women's brains in turn lit up when they got a whiff of a testosterone derivative known to biochemists as AND. In the latest study, they went further: they used brain imaging equipment to test the responses of homosexual men and heterosexual men and women, to EST, AND and other smells such as lavender. AND set the hypothalamus alight in homosexual men and heterosexual women; EST worked for heterosexual men alone. So the research shows that the human brain responds differently to these potential pheromones (pheromones are the agencies of attraction in the animal world, but nobody is very sure that human love and desire is so simply mediated) and that there could be a link between sexual orientation and brain function. But all research into the biology of sexual orientation ends up pivoting on phrases such as "could be". Humans are complex and human desires are even more so. Is homosexuality a product of the genes and therefore inherited from parents and grandparents? Is it something influenced by development early in life, in the mother's womb, or in the first traumatic years of infancy? Do society, tradition and culture play a part? Or are all humans potential victims of love in varying forms? More than a decade ago, a scientist at the US National Cancer Institute was convinced that he had established a link between a length of chromosome inherited from the mother and overt homosexuality. At the time, others pointed out that he might have found a gene for being forthright, or a gene for collecting Judy Garland records. One neuroscientist had claimed to have detected a difference between gay and "straight" brains. Another one, in 1998, suggested that bisexual women had a slightly different inner ear structure from heterosexual women. Others neuroscientists have been more cautious. Several studies of finger length - the relationship between the ring and the index fingers - have been invoked as predictors of homosexual and straight behaviour, but they have also been invoked to predict whether someone might be good at football or not. A Canadian team showed in 2000 that gay men and lesbians were more likely to be left-handed than heterosexuals of either sex. But all of this research is about tendencies and probabilities, rather than some biological divide. A team in Oregon last year reported that they had detected a difference between rams that preferred ewes and rams that preferred each other. The difference, they reported, was in the hypothalamus. But there are only so many questions you can ask a sheep. For the moment, love remains as mysterious as ever. · Tim Radford is the Guardian's science editor"
      title : "Whiff all my love"
      url : "https://www.theguardian.com/science/2005/may/10/gayrights.uknews"
    */

  }
})


/*var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function() {
  console.log('success?')
  console.log(xhr.responseText)
  if (xhr.readyState == 4) {
    // innerText does not let the attacker inject HTML elements.
    document.getElementById('resp').innerText = xhr.responseText;
  }
}
xhr.send();*/
