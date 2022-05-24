from selenium.webdriver.common.by import By

class StartingPageLocators(object):
    SIGN_UP_BY_PHONE_OR_EMAIL = (By.LINK_TEXT,"Sign up with a phone number or email")
    SIGN_IN = (By.XPATH,"/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[5]/a[1]/div[1]/p[1]")
    SIGN_IN_WITH_APPLE = (By.XPATH,"/html/body/div/div/div/div[2]/main/div/div/div[1]/div[1]/div/div[3]/div[2]")
    SIGN_IN_WITH_GOOGLE = ("/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]")
    USERNAME="ellethykhaled2@gmail.com"
    PASSWORD="kokokaka99"
    USERNAME_1="ellethykhaled"
    NAME="Lethy"
    TWEET_1="the king  IS HERE"
    REPLEY="I AM REPLEYING"
    TWEET_1_SPECIAL="SPECIAL TWEET"
    LIKE_TWEET="TEST LIKE"
    
class SignInLocators(object):
    INSERT_UR_INFO = "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/form[1]/div[1]/div[1]/input[1]"
    NEXT_BUTTON = (By.XPATH,"/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/p[1]")
    
    ALERT_MSG ="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]"
    FORGET_PASSWORD="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]/p[1]"
    FORGET_PASSWORD_1="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/div[1]/p[1]"
    FORGET_PASSWORD_2="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/a[1]/p[1]"
        
    ALERT_MSG_TEXT="Sorry, we could not find your account."
    INSERT_UR_PASSWORD="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/input[1]"
    LOG_IN ="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/button[1]"
    WRONG_PASSWORD="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[1]"
    WRONG_PASSWORD_TEXT="Wrong password!"
    INSERT_UR_MAIL_AFTER_FORGET_PASSWORD="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]"
    SIGNIN_WITH_GOOGLE="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]"
    SIGN_UP="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[4]/a[1]/span[1]"
    INSERT_UR_GMAIL=""
    SEARCH_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]/p[1]"
    SEARCH_BUTTON_1="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/button[1]/p[1]"
    ALERT_MSG_FORGET_PASSWORD="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[4]/div[1]/div[1]"
    VER_CODE="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[3]/form[1]/div[1]/div[1]/input[1]"
    
class SignUpLocators(object):
    NEXT_BUTTON = (By.XPATH,"//div[@class='css-1dbjc4n r-kemksi r-1p0dtai r-1d2f490 r-1xcajam r-zchlnj']//span[@class='css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0'][normalize-space()='Next']")
    NAME_TEXTBOX =   "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[1]/input[1]"
    USER_NAME = "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[4]/form[1]/div[1]/div[1]/input[1]"
    PHONE_TEXTBOX = "Phone number-input"  #NAME //div[@class='css-1dbjc4n r-1n7yuxj']//div[1]//label[1]//div[1]//div[2]
    DAY=            "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[9]/div[1]/div[2]/div[1]/select[1]"
    MONTH         = "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[9]/div[1]/div[1]/div[1]/select[1]"
    YEAR            = "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[9]/div[1]/div[3]/div[1]/select[1]"
    GENDER="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[6]/div[1]/div[1]/select[1]"
    ERROR_MSG       = "//span[normalize-space()='Please enter a valid phone number.']" #XPATH
    EXPECTED_MSG    = "Please enter a valid phone number."
    WRONG_NAMEX50   ="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    NEXT_CREATE_ACCOUNT ="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/button[1]"
    NEXT_PAGE_NEXT ="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]/p[1]"
    EMAIL_TEXTBOX ="Email address-input"
    EXPECTED_MSG_EMAIL="Please enter a valid email."
    EMAIL_TEXT="Email"
    EMAIL_TEXT_LOC='div[pseudo="-webkit-input-placeholder"]'
    PHONE_LINK="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[5]/p[1]"
    PHONE_LINK_TEXT="Use phone instead"
    ERROR_MSG_PHONE="" #LOCATIONS
    ERROR_MSG_EMAIL=""
    EMAIL_LINK="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[5]/p[1]"
    EMAIL_LINK_TEXT="Use email instead"
    TEXT_SIGNUP_LOC="/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]"
    NEXT_CREATE_ACCOUNT_CLICK="Next"
    USERNAME_TEXTBOX="Username-input"
class Passwordlocarors(object):
    PASSWORD_TEXTBOX= "password"  #NAME
    FORGET_PASSWORD = "//span[contains(text(),'Forgot password?')]" #XPATH
    LOGIN_BUTTON = "/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/main[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]"
    FORGET_PASSWORD_TEXT = "Forgot password?"
    
class Notificationslocator(object):
    NOTFI_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[4]/a[1]/div[1]"
    
    ALL_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]"
    MENTION_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/a[1]"
    BODY_NOTFI="/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]"
    NUMBER="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]"
    
         

class profilelocators(object):
    TWETA="be carefull i am testing"
    PEOFILE_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[8]/a[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
    PROFILE_ICON_2= "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[8]/a[1]/div[1]/*[name()='svg'][1]/*[name()='path'][1]"
    HOME_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[2]/a[1]/div[1]"
    BODY_OF_THE_TWEET="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[2]"
    FIRST_TWEET="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[2]"
    SECOND_TWEET="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/div[3]/div[2]"
    TWEET_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[1]/div[1]"
    TEXT_OF_THE_TWEET="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[2]/div[1]/div[1]/form[1]/div[1]/textarea[1]"
    TWEET_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[2]/div[1]/div[2]/button[6]"
    X_TWEET_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[1]/img[1]"
    DISCARD_MSG=""
    EDIT_PROFILE="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[4]/button[1]"
    FOLLOW_BUG=  "/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[4]/div[1]/button[1]"
    MY_PIC_IN_TWEET="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[2]/div[1]/div[1]/div[1]/a[1]/img[1]"
    TWEETX280="XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    GIF_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[2]/div[1]/div[2]/button[1]/div[1]/*[name()='svg'][1]"
    SEARCH_GIF="/html[1]/body[1]/div[2]/div[1]/div[1]/div[1]/div[1]/form[1]/input[1]"
    GIF1="/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/img[1]"
    GIF_1_4="/html[1]/body[1]/div[2]/div[1]/div[2]/img[5]"
    GIF2="/html[1]/body[1]/div[2]/div[1]/div[2]/div[3]/img[1]"
    PHOTO_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[10]/div[3]/div[2]/div[1]/div[2]/div[1]/button[1]/div[1]/*[name()='svg'][1]"
    USERNAME="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[1]/p[1]"
    NAME="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[3]/div[2]"
    REPLEY_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[1]/div[1]/div[1]/*[name()='svg'][1]"
    REPLEY_BODY="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/form[1]/div[1]/textarea[1]"
    REPLEY_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/button[6]"
    X_REPLY_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/img[1]"
    DISCARD_REPLEY_MSG=""
    GIF_REPLY="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/button[1]/div[1]/*[name()='svg'][1]"
    TWEETS_TAB          ="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[6]/a[1]/div[1]/p[1]"
    TWEETS_AND_RPLEY_TAB="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[6]/a[2]/div[1]/p[1]"
    MEDIA_TAB="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[6]/a[3]/div[1]/p[1]"
    LIKE_TAB="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[6]/a[4]/div[1]/p[1]"
    REPLY_WHO=""
    RETWEET_WHO=""
    LIKE_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[3]/div[5]/div[1]/div[1]/*[name()='svg'][1]"
    OPTION="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/*[name()='svg'][1]"
    DELETE="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]"
    DELETE_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[3]/div[1]/div[3]/div[1]/div[1]/div[2]"
    RETWEET_ICON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[7]/div[1]/div[2]/div[1]/div[1]/div[3]/div[3]/div[3]/div[1]/div[1]/*[name()='svg'][1]"
    REPLY_LIKE="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[4]/div[1]/p[3]/span[1]"
    REPLY_LIKE_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[3]/div[4]/div[2]/div[2]/*[name()='svg'][1]"
    REPLY_BODY_CLICK="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/form[1]/div[1]/textarea[1]"
    REPLY_BODY_BUTTON_CLICK="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[2]/button[6]"
    FOLLOWERS="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[4]/a[2]"
    FOLLOWERS_NUMBER="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[4]/a[2]/span[1]"
    FOLLOWING="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[4]/a[1]"
    FOLLOWING_NUMBER="/html[1]/body[1]/div[3]/div[1]/div[1]/div[1]/div[2]/div[5]/div[4]/a[1]/span[1]"
    UNFOLLOW_BUTTON="/html[1]/body[1]/div[3]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[4]/button[1]"
    UNFOLLOW_MSG=""
    
                     
class Settings_Locators(object):
    
    Search_bar = '/html/body/div[3]/div/div/div[2]/div[1]/div[1]/form/input'
    your_account ="/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[1]"
    Twitter_blue = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[2]"
    Security_and_Account = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[3]"
    Privacy_and_safety = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[4]"
    notifications = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[5]"
    accessbility = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[6]"
    resources = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[7]"

    your_account_ident ="/html/body/div[3]/div/div/div[2]/div[2]/h2"
    under_construct = "/html/body/div[1]/div[2]/div[3]/button"

    search_result = " "

class Side_bar_Locators(object):
    Home = "/html/body/div[3]/div/div/div/div[1]/div[2]/a/div"
    Explore = "/html/body/div[3]/div/div/div/div[1]/div[3]/a/div"
    Notifications = "/html/body/div[3]/div/div/div/div[1]/div[4]/a/div"
    Messages = "/html/body/div[3]/div/div/div/div[1]/div[5]/a/div"
    bookmark = "/html/body/div[3]/div/div/div/div[1]/div[6]/a/div"
    lists = "/html/body/div[3]/div/div/div/div[1]/div[7]/a/div"
    profile = "/html/body/div[3]/div/div/div/div[1]/div[8]/a/div"
    more = "/html/body/div[3]/div/div/div/div[1]/div[9]/div[1]"
    tweet_box = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[1]"

    Settings_more = "/html/body/div[3]/div/div/div/div[1]/div[9]/div[2]/a[7]"
    topics = "/html/body/div[3]/div/div/div/div[1]/div[9]/div[2]/a[1]"

    Settings_identifier = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[5]"
    Home_ident = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[2]/button[6]"

    tweet_box_itself = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[3]/div[2]/div/div[1]/form/div/textarea"
    tweet_button_dialog = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[3]/div[2]/div/div[2]/button[6]"

    logout_sidebar = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[2]/div[1]"
    logout_button = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[2]/div[2]/p[2]"


class Edit_Profile_Locators(object):
    profile_side_bar = "/html/body/div[3]/div/div/div/div[1]/div[8]/a/div"  # xpath kolo
    edit_profile_button = "/html/body/div[3]/div/div/div/div[2]/div[4]/button"
    name_field = "/html/body/div[3]/div/div/div/div[2]/div[4]/div/div/div/div[2]/form/div[1]/div/input"
    bio_field = "/html/body/div[3]/div/div/div/div[2]/div[4]/div/div/div/div[2]/form/div[2]/div/textarea"
    save_button = "/html/body/div[3]/div/div/div/div[2]/div[4]/div/div/div/div[1]/button"

    profile_page_identifier = "/html/body/div[3]/div/div/div/div[2]/div[4]/button"
    name_from_profile ="/html/body/div[3]/div/div/div/div[2]/div[5]/div[1]/h6"
    bio_from_profile ="/html/body/div[3]/div/div/div/div[2]/div[5]/div[2]/p"

class Account_info_Locators(object):
    more_button_home = "/html/body/div[3]/div/div/div/div[1]/div[9]/div[1]"
    settings_button = "/html/body/div[3]/div/div/div/div[1]/div[9]/div[2]/a[7]"
    your_Account_button = "/html/body/div[3]/div/div/div[2]/div[1]/div[2]/div[1]"
    account_info_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[1]"
    account_info_identifier = "/html/body/div[3]/div/div/div[2]/div[2]/h2"

    username_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[1]"
    username_field = "/html/body/div[3]/div/div/div[2]/div[2]/form/input"
    username_save= "/html/body/div[3]/div/div/div[2]/div[2]/form/div/button"
    username_back = "/html/body/div[3]/div/div/div[2]/div[2]/h2/svg"

    Home_sidebar = "/html/body/div[3]/div/div/div[1]/div[2]/a/div"
    username_home = "/html/body/div[3]/div/div/div/div[1]/div[10]/div[2]/div[1]/div[1]/p[2]"

    phone = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[2]"
    email = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[3]"
    verified = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[4]"
    protected = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[5]"
    account_creation = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[6]"
    country = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[7]"
    gender = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[8]"
    birth_date = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[9]"
    age = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[10]"
    automation = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[11]"
    under_construction_ident = "/html/body/div[1]/div[2]/div[3]/button"

class your_Account_Locators(object):
    your_Account_ident = "/html/body/div[3]/div/div/div[2]/div[2]/h2"
    account_info_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[1]"
    account_info_identifier = "/html/body/div[3]/div/div/div[2]/div[2]/h2"
    change_pass_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[2]"
    change_pass_identifier = "/html/body/div[3]/div/div/div[2]/div[2]/h2"
    download_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[3]"
    teams_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[4]"
    deactivate = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[5]"
    under_construct = "/html/body/div[1]/div[2]/div[3]/button"

class Change_pass_Locators(object):
    your_Account_ident = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[5]" # deactivate button

    change_pass_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/div[2]"
    change_pass_identifier = "/html/body/div[3]/div/div/div[2]/div[2]/h2"
    
    old_pass = "/html/body/div[3]/div/div/div[2]/div[2]/div/form/div/div[1]/input" # current
    new_pass = "/html/body/div[3]/div/div/div[2]/div[2]/div/form/div/div[2]/input"
    confirm_pass= "/html/body/div[3]/div/div/div[2]/div[2]/div/form/div/div[3]/input"
    save_button = "/html/body/div[3]/div/div/div[2]/div[2]/div/form/button"

class Home_Page_Locators(object):
    Homepage_identifier = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[2]/button[6]"
    search_field = "/html/body/div[3]/div/div/div/div[3]/div[1]/div/form/input"
    search_button = "/html/body/div[3]/div/div/div/div[3]/div[1]/div/form/svg/path"
    search_button_css = 'svg[focusable="false"]'
    search_first_result = "/html/body/div[3]/div/div/div/div[3]/div[1]/div[2]/div/div/a/div/div/div[2]/p[2]"
    no_result_found = "/html/body/div[3]/div/div/div/div[3]/div[1]/div[2]/div/div/p"
    profile_pic_what_happening = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[1]/div/a/img"

    what_happening = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[1]/form/div/textarea"
    what_happening_tweet_button = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[2]/button[6]"
    first_tweet_text = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[2]"

    media_button = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[2]/div/button/div"

    gif_button = "/html/body/div[3]/div/div/div/div[2]/div[1]/div[2]/button[1]/div"
    gif_category = "/html/body/div[2]/div/div[2]/div[1]/img"
    gif_itself = "/html/body/div[2]/div/div[2]/img[1]"

    reply_button_first_tweet = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[3]/div[1]/div/div"
    reply_field = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[3]/div[1]/form/div/textarea"
    reply_button_reply_dialog = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[1]/div[2]/div[2]/div[3]/div[2]/button[6]"
    reply_itself = "/html/body/div[3]/div/div/div/div[2]/div[4]/div/div[3]/div[3]"

    first_tweet_itself = "/html/body/div[3]/div/div/div/div[2]/div[2]/div"
    tweet_thrad_ident = "/html/body/div[3]/div/div/div/div[2]/div[1]/h2" # text tweet fo2

    retweet_button_second_tweet = "/html/body/div[3]/div/div/div/div[2]/div[3]/div/div[3]/div[3]/div[3]/div/div"

    like_button_first_tweet = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[3]/div[5]/div/div"
    like_counter_before = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[3]/div[5]/div/div/p"
    like_counter_after = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[3]/div[5]/div/div/p"

    profile_link_text = "/html/body/div[3]/div/div/div/div[2]/div[2]/div/div[3]/div[1]/a[1]/h2"




    

    

sign_in = "/html/body/div[3]/div/div[1]/div[1]/div/div[5]/a/div"
email_field = "/html/body/div[3]/div/div/div/div/div/div[2]/div[1]/form/div/div/input"
next_button = '/html/body/div[3]/div/div/div/div/div/div[2]/div[1]/div[3]/p'
pass_field = "/html/body/div[3]/div/div/div/div/div/div[2]/div/div[2]/div/div/div/input"
log_in_button = "/html/body/div[3]/div/div/div/div/div/div[3]/div[1]/button"
email_text = "mekha2000@gmail.com"
pass_text = "1234567890" 