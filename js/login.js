// ─── AUTH PAGE JS ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {

    // ── Session check: redirect to app if already signed in ──────────────────
    try {
        const session = await authCheckSession();
        if (session) {
            window.location.href = 'app.html';
            return;
        }
    } catch (_) {}

    // ── Card switching ────────────────────────────────────────────────────────
    function showLoginCard() {
        document.getElementById('login-card').style.display = '';
        document.getElementById('signup-card').style.display = 'none';
    }

    function showSignupCard() {
        document.getElementById('login-card').style.display = 'none';
        document.getElementById('signup-card').style.display = '';
    }

    function showLoginFromSignup() {
        showLoginCard();
    }

    // Expose to inline onclick handlers in HTML
    window.showLoginCard = showLoginCard;
    window.showSignupCard = showSignupCard;
    window.showLoginFromSignup = showLoginFromSignup;

    // ── Error / success helpers ───────────────────────────────────────────────
    function _setLoginError(msg) {
        const el = document.getElementById('login-error');
        el.textContent = msg;
        el.style.display = msg ? 'block' : 'none';
    }

    function _setSignupError(msg) {
        const el = document.getElementById('signup-error');
        el.textContent = msg;
        el.style.display = msg ? 'block' : 'none';
        document.getElementById('signup-success').style.display = 'none';
    }

    function _setSignupSuccess(msg) {
        const el = document.getElementById('signup-success');
        el.textContent = msg;
        el.style.display = msg ? 'block' : 'none';
        document.getElementById('signup-error').style.display = 'none';
    }

    // ── Login ─────────────────────────────────────────────────────────────────
    async function doLogin(e) {
        e.preventDefault();
        const email    = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        const btn      = document.getElementById('btn-login');
        _setLoginError('');
        btn.disabled    = true;
        btn.textContent = 'Signing in…';
        try {
            await authSignIn(email, password);
            window.location.href = 'app.html';
        } catch (err) {
            _setLoginError(err.message || 'Sign in failed. Check your credentials and try again.');
        } finally {
            btn.disabled    = false;
            btn.textContent = 'Sign In →';
        }
    }

    // ── Signup ────────────────────────────────────────────────────────────────
    async function doSignup(e) {
        e.preventDefault();
        const firstName = document.getElementById('signup-firstname').value.trim();
        const lastName  = document.getElementById('signup-lastname').value.trim();
        const email     = document.getElementById('signup-email').value.trim();
        const password  = document.getElementById('signup-password').value;
        const confirm   = document.getElementById('signup-confirm').value;
        const btn       = document.getElementById('btn-signup');
        _setSignupError('');
        if (password !== confirm) { _setSignupError('Passwords do not match.'); return; }
        btn.disabled    = true;
        btn.textContent = 'Creating account…';
        try {
            const data = await authSignUp(firstName, lastName, email, password);
            if (data.session) {
                window.location.href = 'app.html';
            } else {
                document.getElementById('signup-form').style.display = 'none';
                _setSignupSuccess('Account created! Check your email to confirm your address, then sign in.');
            }
        } catch (err) {
            _setSignupError(err.message || 'Sign up failed. Please try again.');
        } finally {
            btn.disabled    = false;
            btn.textContent = 'Create Account →';
        }
    }

    // Expose to inline form onsubmit handlers
    window.doLogin  = doLogin;
    window.doSignup = doSignup;

});
