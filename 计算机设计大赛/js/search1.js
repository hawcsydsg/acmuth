document.getElementById('search-input').addEventListener('input', function () {
    const input = this.value;
    const suggestionsPanel = document.getElementById('search-suggestions');
    // 清除当前的建议
    suggestionsPanel.innerHTML = '';

    if (input.length > 0) {
        // 模拟搜索建议
        const suggestions = ['建议1', '建议2', '建议3'];
        suggestions.forEach(function (suggested) {
            const div = document.createElement('div');
            div.innerHTML = suggested;
            div.addEventListener('click', function () {
                document.getElementById('search-input').value = suggested;
                // 清除建议
                suggestionsPanel.innerHTML = '';
            });
            suggestionsPanel.appendChild(div);
        });
        suggestionsPanel.style.display = 'block';
    } else {
        suggestionsPanel.style.display = 'none';
    }
});