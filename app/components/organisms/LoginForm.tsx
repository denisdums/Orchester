export default function LoginForm({error = undefined}: {error?: string|undefined})
{
    return(
        <div className="flex flex-col gap-10">
            <div>
                <h3 className="font-bold text-lg text-center">Connexion</h3>
                <p className="text-center">Connectez vous à votre compte.</p>
            </div>
            <form method="post" action="/login" className="flex flex-col items-center gap-4">
                {error &&(
                    <div role="alert" className="alert alert-error text-white max-w-sm mx-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}</span>
                    </div>
                )}
                <label className="flex w-full justify-center">
                    <input type="email"
                           name="email"
                           className="input input-bordered w-full max-w-sm"
                           placeholder="Email"/>
                </label>
                <label className="flex w-full justify-center">
                    <input type="password"
                           name="password"
                           className="input input-bordered w-full max-w-sm"
                           placeholder="Password"/>
                </label>
                <button className="btn btn-primary text-white mt-4 max-w-sm">Login</button>
            </form>
        </div>
    )
}