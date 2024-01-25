import { useTranslation } from "react-i18next";
// import { useUser } from "@/services/user.service.ts";

const HomePage = () => {
    const { t } = useTranslation();
    // const { user, isError } = useUser("roberto-dellantonio", 'verbose');

    return (
        <div>
            <h1 className="text-7xl font-bold underline">Home Page</h1>
            <p>This is the home page</p>
            <p>{t('hello-world')}</p>
            {/* {user && <p>{JSON.stringify(user)}</p>}
            {isError && <p>{JSON.stringify(isError)}</p>} */}
        </div>
    );
};

export default HomePage;