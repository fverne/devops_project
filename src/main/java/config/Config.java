package config;

/** Global configuration
 * Created by Christian on 28-04-2017.
 */
public class Config {
    public static final boolean DEBUG = true;
    public static final String CAMPUSNET_LOGIN_URL = "https://auth.dtu.dk/dtu/";
    public static final String CAMPUSNET_VALIDATE_URL = "https://auth.dtu.dk/dtu/validate";

    // custom path to our site
    public static final String GODINSIDE = "https://godinside.devops.diplomportal.dk/";

    //service paths
    public static final String BASE_API_PATH = "/rest";
    //V1 paths
    public static final String CN_SERVICE_PATH = "cn";
    public static final String CN_SERVICE_LOGIN = "login";

    //Package for Morphia DTO's
    public static final String DATA_DB_DTO = "data.dbDTO";
    //global vars
    public static final String PORTAL_ADMIN = "PortalAdmin";
}
