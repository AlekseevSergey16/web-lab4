<header class="header">
    <div class="header__logo"><a href="">ScreenshotHub</a></div>
    <div class="header__buttons">
        <?php if (!isset($_SESSION['userLogin'])): ?>
            <button class="header__sign-in-btn btn">Войти</button>
            <button class="header__sign-up-btn btn">Зарегистрироваться</button>
        <?php else: ?>
            <p>Привет <?= $_SESSION['userLogin'] ?></p>
            <a class="btn exit-btn" href="/logout.php">Выход</a>
        <?php endif; ?>
    </div>
</header>
