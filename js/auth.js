(function () {
    // Guard: warn clearly if env.js hasn't been filled in
    if (
        !window.SUPABASE_URL ||
        window.SUPABASE_URL.includes('YOUR_PROJECT_REF') ||
        !window.SUPABASE_ANON_KEY ||
        window.SUPABASE_ANON_KEY.includes('YOUR_ANON')
    ) {
        console.error(
            '[auth.js] Supabase credentials not configured.\n' +
            'Open env.js and replace the placeholder values with your project URL and anon key.\n' +
            'Find them at: Supabase Dashboard → Project Settings → API'
        );
        window.authCheckSession = async () => null;
        window.authSignIn = async () => { throw new Error('Supabase not configured — edit env.js with your project credentials.'); };
        window.authSignUp = async () => { throw new Error('Supabase not configured — edit env.js with your project credentials.'); };
        window.authSignOut = async () => {};
        return;
    }

    const _db = window.supabase.createClient(
        window.SUPABASE_URL,
        window.SUPABASE_ANON_KEY
    );

    window.authCheckSession = async function () {
        const { data: { session } } = await _db.auth.getSession();
        return session;
    };

    window.authSignIn = async function (email, password) {
        const { data, error } = await _db.auth.signInWithPassword({ email, password });
        if (error) throw error;
        return data;
    };

    window.authSignUp = async function (firstName, lastName, email, password) {
        const { data, error } = await _db.auth.signUp({
            email,
            password,
            options: { data: { first_name: firstName, last_name: lastName } }
        });
        if (error) throw error;
        return data;
    };

    window.authSignOut = async function () {
        const { error } = await _db.auth.signOut();
        if (error) throw error;
    };

    window.authGetUser = async function () {
        const { data: { user } } = await _db.auth.getUser();
        return user;
    };

    window.logDownload = async function (fullName, email, department, fileName) {
        const { data: { user } } = await _db.auth.getUser();
        if (!user) return;
        await _db.from('downloads').insert({
            user_id:   user.id,
            full_name: fullName,
            email:     email,
            department: department,
            file_name:  fileName
        });
    };
})();
