document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn-success').addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const genderElement = document.querySelector('input[name="gender"]:checked');
        const dateOfBirth = document.getElementById('date').value;
        const hobbies = [];
        document.querySelectorAll('input[type="checkbox"]:checked').forEach(hobby => hobbies.push(hobby.nextElementSibling.innerText));
        const address = document.getElementById('address').value;
        const cityElement = document.getElementById('city');
        const city = cityElement.options[cityElement.selectedIndex]?.text.trim();

        let errors = [];
        if (!username) errors.push('TÀI KHOẢN');
        if (!password) errors.push('MẬT KHẨU');
        if (hobbies.length === 0) errors.push('SỞ THÍCH');
        if (!genderElement) errors.push('GIỚI TÍNH');
        if (!dateOfBirth) errors.push('NGÀY SINH');
        if (!address) errors.push('ĐỊA CHỈ');
        if (!city || city === 'Chọn tỉnh thành') errors.push('THÀNH PHỐ');

        if (errors.length > 0) {
            alert('VUI LÒNG NHẬP THÔNG TIN VÀO CÁC Ô ' + errors.join(', ') + '!!!');
            return; 
        }

        alert(
            'Thông tin đã nhập:\n' +
            `Tài khoản: ${username}\n` +
            `Mật khẩu: ${password}\n` +
            `Giới tính: ${genderElement.value}\n` +
            `Ngày sinh: ${dateOfBirth}\n` +
            `Sở thích: ${hobbies.join(', ')}\n` +
            `Địa chỉ: ${address}\n` +
            `Thành phố: ${city}`
        );
    });

    document.querySelector('.btn-danger').addEventListener('click', function() {
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.querySelectorAll('input[name="gender"]').forEach(radio => radio.checked = false);
        document.getElementById('date').value = '';
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        document.getElementById('address').value = '';
        document.getElementById('city').selectedIndex = 0; 
    });
});
