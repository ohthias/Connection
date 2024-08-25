async function translateText(text, targetLanguage) {
    const apiKey = 'YOUR_API_KEY'; // Substitua pela sua chave de API do Google Translate
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            q: text,
            target: targetLanguage
        })
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
}

// Exemplo de uso
translateText('Hello, world!', 'es').then(translatedText => {
    console.log(translatedText); // Saída: "Hola, mundo!"
});


// Dicionário básico de tradução
const dictionary = {
    'Hello': 'Hola',
    'world': 'mundo'
};

function translateText(text) {
    return text.split(' ').map(word => dictionary[word] || word).join(' ');
}

// Exemplo de uso
const originalText = 'Hello world';
const translatedText = translateText(originalText);
console.log(translatedText); // Saída: "Hola mundo"
