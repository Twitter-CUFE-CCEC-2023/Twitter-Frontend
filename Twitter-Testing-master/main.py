from email.quoprimime import body_check
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
from pickle import TRUE
from sqlite3 import Time
import unittest
from selenium import webdriver
import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


PATH = "/usr/bin/chromedriver"
testcases=0
passed=0
failed=0
STARTUP_PAGE="https://www.twittercloneteamone.tk"
HOME_PAGE="http://www.twittercloneteamone.tk/home"
Report_signIn = open("sign_in.txt", "a")
Report_signUp = open("sign_up.txt", "a")
Report_profile = open("Profile.txt", "a")
Report_notfi = open("Notifications.txt","a")
class PythonOrgSearch(unittest.TestCase):
    
    def setUp(self):
        chromeOptions = webdriver.ChromeOptions() 

        chromeOptions.add_argument("--no-sandbox") 
        chromeOptions.add_argument("--disable-setuid-sandbox") 

        chromeOptions.add_argument("--headless");
        chromeOptions.add_argument("--remote-debugging-port=9222")  # this

        chromeOptions.add_argument("--disable-dev-shm-using") 
        chromeOptions.add_argument("--disable-extensions") 
        chromeOptions.add_argument("--disable-gpu") 
        chromeOptions.add_argument("start-maximized") 
        chromeOptions.add_argument("disable-infobars")
        chromeOptions.add_argument(r"user-data-dir=.\cookies\\test") 



        self.driver =  webdriver.Chrome(PATH,chrome_options=chromeOptions)
    
        self.driver.get(STARTUP_PAGE)
        
        

   
    
    '''
    def test_case_SIGNUP_click_sign_up_button(self):
        SignUp_page=page.SignUpPage(self.driver)
        global testcases
        global passed
        global failed
        testcases+=1
        #Report_signIn.write("test case=>",testcases)
        Report_signUp.write("SIGN UP PAGE -> test case of Sign up button \n" )
        
        if(SignUp_page.click_sign_up()):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True         
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
        
        #testing:that the next button is enable or not    # i cant detect the message bec its pop msg and disapper and selenium cant deal with it
   
    def test_case_SIGNUP_by_Gmail(self):
        sign_up=page.loginbyGoogle(self.driver)
        Report_signUp.write("SIGN UP PAGE -> test case of Sign up with google \n" )
        if(sign_up.click_sign_in_with_Gmail()):
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            Report_signUp.write("FAILED\n\n")
            assert False
                
           
        
    
    def test_case_SIGNUP_is_next_Enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        Report_signUp.write("SIGN UP PAGE -> test case of is next button is enable without inserting info. \n" )
        #testing:that the next button is enable or not 
        if(SignUp_page.is_NEXT_enable()):
            failed+=1
            Report_signUp.write("FAILED:next button is enable\n\n")
            assert False
        else:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True       
        
        
        #testing: that text box cant carry more than 50 letters
          
    def test_case_SIGNUP_textboxX50(self): 
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting more than 50 letter in the textbox of the Name \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()   
        SignUp_page.insert_ur_name(SignUpLocators.WRONG_NAMEX50)
        if(SignUp_page.cheack_ur_name_size()):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            # if it more than 50 letter as ur name
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
          
    
        #testing  inserting a wrong email address text box
    def test_case_SIGNUP__wrong_email(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting wrong email \n" ) 
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()       
        SignUp_page.insert_ur_email("1234")
        actualmsg=SignUp_page.check_wrong_msg_email()
        print(actualmsg)
        if actualmsg==SignUpLocators.EXPECTED_MSG_EMAIL:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED: no error msg when you enter invaild email\n\n")
            assert False
            
        
    def test_case_SIGNUP_phone_link_text(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of check text of phone link \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        if SignUpLocators.PHONE_LINK_TEXT==SignUp_page.check_phone_link():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False 
     
           
    def test_case_SIGNUP_wrong_phone_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of inserting wrong number \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        SignUp_page.insert_ur_phone(SignUpLocators.WRONG_NAMEX50)
        if SignUpLocators.ERROR_MSG_EMAIL==SignUp_page.check_wrong_msg_email():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED:no error msg when you enter invaild phone number\n\n")
            assert False    
     
    
    def test_case_SIGNUP_next_enable_after_inserting_wrong_phone(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of checking the next button after inserting wrong phone number \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        SignUp_page.insert_ur_phone(SignUpLocators.WRONG_NAMEX50)
        SignUp_page.insert_ur_name("testing")
        if(SignUp_page.is_NEXT_enable()):
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False
        else:
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True 
    
    
    def test_case_SIGNUP_cheack_email_link(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of format of  Email link \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        SignUp_page.click_phone_link()
        if SignUpLocators.EMAIL_LINK_TEXT==SignUp_page.check_Email_link():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
         
                   
       
  
            
       
    
    def test_case_SIGNUP_create_account(self): 
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of creating account \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        #when i click on the link it clear my name      
        SignUp_page.insert_ur_name("lucio")     
        SignUp_page.insert_ur_email("alihithem2000@gamil.com")
        SignUp_page.insert_ur_username("lucio")
        SignUp_page.select_gender("Male")
       
        print(SignUp_page.select_age("17","04","2000"))
        time.sleep(6) 
       # SignUp_page.choose_day_month_year()
        SignUp_page.click_NEXT()
        if SignUp_page.click_NEXT_in_next_page():
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED\n\n")
            assert False    
    
    def test_case_signUp_cheackYear(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signUp.write("SIGN UP PAGE -> test case of check years \n" )
        SignUp_page=page.SignUpPage(self.driver)
        SignUp_page.click_sign_up()
        if(SignUp_page.Check_year("2022")):
            passed+=1
            Report_signUp.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signUp.write("FAILED: not all years are exist\n\n")
            assert False  
                 
        
        
             
        
    def test_case_SIGNIN_click_the_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of Sign in button \n" )
        Signin_page=page.SignInPage(self.driver)
        if Signin_page.click_sign_in_button():
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
    
    
    
    def test_case_SIGNIN_check_error_msg(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of click next without inserting info. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(5)
        Signin_page.click_Next_button()
        if Signin_page.check_alert_msg()==SignInLocators.ALERT_MSG_TEXT:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
     
      
    def test_case_SIGNIN_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of functionality forget password button \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        if(Signin_page.click_forget_password()):
            Report_signIn.write("PASSED\n\n") 
        else:
            Report_signIn.write("FAILED: button is not working\n\n")
        
    def test_case_SIGNIN_FORGET_PASSWORD_search_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of functionality enable of search button \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        Signin_page.click_forget_password()
        if(Signin_page.is_search_button_enable()):
            Report_signIn.write("FAILED: search button is not enable without info\n\n")
            assert False
        else:
            Report_signIn.write("PASSED\n\n")
            assert True
     
         
    def test_case_SIGNIN_FORGET_PASSWORD_insert_wrong_info(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE(FORGET PASSWORD) -> test case of cheack error msg when enter wrong email in search text \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()  
        Signin_page.click_forget_password()
        Signin_page.foregt_ur_password_insert_info("not working")
        time.sleep(2)
        Signin_page.click_search_button()
        if(Signin_page.check_alert_msg_of_forget_password()==SignInLocators.ALERT_MSG_TEXT):
            Report_signIn.write("PASSED\n\n")
            assert False
        else:
            Report_signIn.write("FAILED : wrong msg \n\n")
            assert True    
                
        
     
    def test_case_SIGNIN_login_enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of login button is enable withot info. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info("ellethykhaled2@gmail.com")
        time.sleep(2)
        Signin_page.click_Next_button()
        if (Signin_page.is_login_button_enable()):
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False
        else:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True    
     
       
    def test_case_SIGNIN_check_wrong_pass(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE(FORGET PASSWORD) -> test case of insert wrong password. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.insert_your_password("wrong password")
        time.sleep(2)
        Signin_page.click_login()
        if Signin_page.check_error_msg_of_wrong_password()==SignInLocators.WRONG_PASSWORD_TEXT:
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
   
    
    def test_case_SIGNIN_FORGET_PASSWORD_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of forget password. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(2)
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.click_forget_password_1()
        if Signin_page.foregt_ur_password_insert_info("Wrong password"):
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
    
    def test_case_SIGNIN_signup(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case Sign up link from sign in page . \n" )
        Signin_page=page.SignInPage(self.driver)
        SignUp_page=page.SignUpPage(self.driver)
        Signin_page.click_sign_in_button()
        time.sleep(2)
        Signin_page.click_signup()
        if SignUp_page.insert_ur_name("testing"):
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False    
        
   
    def test_case_SIGNIN_FORGET_PASSWORD_forget_password(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_signIn.write("SIGN IN PAGE -> test case of forget password in forget password page. \n" )
        Signin_page=page.SignInPage(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.click_forget_password_in()
        Signin_page.foregt_ur_password_insert_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_search_button()
        if Signin_page.insert_ver_code():
            passed+=1
            Report_signIn.write("PASSED\n\n")
            assert True
        else:
            failed+=1
            Report_signIn.write("FAILED\n\n")
            assert False                        
    
     
    def test_case_profile_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> tweet a tweet \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet("hallo")
            profile.click_on_tweet_button()
            time.sleep(5)
        
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            time.sleep(5)
            #refresh
            Report_profile.write("PASSED \n" )
        except:
            Report_profile.write("FAILED \n" )
                
    def test_case_follow_myslef(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> follow myself \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.click_on_my_pic_in_tweet()
            profile.click_on_X_in_tweet()
            if profile.click_on_follow():
               Report_profile.write("FAILED: congratulation you followed yourself XD \n" )  
            else:
                Report_profile.write("PASSED \n\n" )    
        except:
            pass
    
    def test_case_body_of_the_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> body of the tweet accept more than 280 letter \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet(profilelocators.TWEETX280)
            if profile.cheack_ur_tweet_size():
                Report_profile.write("PASSED \n\n" )
            else:
                Report_profile.write("FALIED : ACCEPT more than 280 letter \n\n" )    
        except:
            pass    
               
       
    def test_case_discard_msg(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> discard msg of the tweet when you cancel it  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.tweet("koko")
            if profile.click_on_discrad_msg:
               Report_profile.write("FALIED : there is no discard msg  \n\n" )
            else:
                Report_profile.write("PASSED  \n\n" )
                    
                
            
            
        except:
            Report_profile.write("FALIED : there is no discard msg  \n\n" )
     
    
    
    def test_case_teweet_button_gif(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE ->Testing GIF   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.click_GIF()
            time.sleep(2)
            profile.select_GIF_1()
            if profile.click_on_tweet_button():
                Report_profile.write("PASSED :  \n\n" )
                
            else:
                Report_profile.write("FALIED :  \n\n" )   
    
        except:
            Report_profile.write("FALIED :  \n\n" )
            
        
           
        
    def test_case_post_pic(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE ->Testing  pic   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            if profile.click_pic() :
                Report_profile.write("PASSED  \n\n" )
            else:
                Report_profile.write("FALIED : pic is not working   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED : seach is not working   \n\n" ) 
    
    
    
    def test_case_check_name(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> name   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            print(profile.check_name)
            if not profile.check_name==StartingPageLocators.NAME:
                Report_profile.write("PASSED  \n\n" )
            else:
                Report_profile.write("FALIED : its not right name   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
                                            
    
    def test_case_PROFILE_reply_acceptX280(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> accept more than 280   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley(profilelocators.TWEETX280)
            
            if profile.cheack_ur_reply_size:
                Report_profile.write("PASSED  \n\n" )
            else:
                Report_profile.write("FALIED : not accept more than 280    \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    
    
    def test_case_PROFILE_reply_enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> Enbale reply button   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley(profilelocators.TWEETX280)
            print(profile.is_reply_button_enable)
            if not profile.is_reply_button_enable:
                Report_profile.write("FALIED : its enable with wrong info    \n\n" )
            else:
                Report_profile.write("PASSED  \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" ) 
    
    def test_case_PROFILE_dicard_msg(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> discard msg   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley(profilelocators.TWEETX280)
            profile.click_on_x_reply_button()
            
            if profile.click_on_discard_msg_reply:
                Report_profile.write("FALIED : dicard msg not found    \n\n" )
            else:
                Report_profile.write("PASSED  \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" ) 
    
    def test_case_PROFILE_reply(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on reply   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley("i am testing on u take care")
            
            
            if profile.click_on_reply_button():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED: reply isnot working  \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" ) 
    
    def test_case_PROFILE_replyby_GIF(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on reply by Gif   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley("i am testing on u take care")

            time.sleep(3)
            
            
            if profile.click_on_GIF_reply():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED: reply by Gif is not working  \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    
    def test_case_PROFILE_reply_postion_in_tweet_tab(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on repley appers in tweet tab  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley("i am testing on u take care")
            profile.click_on_reply_button()
            time.sleep(3)
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            # finish refresh
            
            time.sleep(10)
            if profile.text_body_1()=="i am testing on u take care":
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED:the  reply is not apper in tweets tab \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    def test_case_PROFILE_reply_postion_in_tweet_and_replies_tab(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on repley appers in tweet & replies tab  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_tweet_icon()
            profile.tweet(StartingPageLocators.TWEET_1)
            profile.click_on_tweet_button()
            time.sleep(7)
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            # finish refresh
            profile.click_on_reply_icon()
            time.sleep(1)
            profile.send_repley("i am testing on u take care")
            profile.click_on_reply_button()
            time.sleep(3)
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            # finish refresh
            
            profile.click_on_tweet_and_replies_tab()
            time.sleep(10)
            if profile.text_body_1()==StartingPageLocators.TWEET_1 and profile.text_body_2()=="i am testing on u take care":
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED:the  reply is not working the replied tweet is not appering \n\n" )
                
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" ) 
      
    def test_case_PROFILE_check_duplicate_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on cheack duplicate  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_tweet_icon()
            profile.tweet(StartingPageLocators.TWEET_1_SPECIAL)
            profile.click_on_tweet_button()
            time.sleep(7)
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            # finish refresh  
            time.sleep(7)
            if profile.text_body_1()==profile.text_body_2():
               Report_profile.write("FALIED : Duplicate detected   \n\n" ) 
            else:
                Report_profile.write("PASSED    \n\n" ) 
            
            
        except:
            Report_profile.write("FALIED :    \n\n" ) 
    
    def test_case_PROFILE_like(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on like  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_tweet_icon()
            profile.tweet(StartingPageLocators.LIKE_TWEET)
            profile.click_on_tweet_button()
            time.sleep(7)
            #refresh
            profile.click_profile_icon()
            time.sleep(2)
            profile.click_home_icon()
            time.sleep(2)
            profile.click_profile_icon()
            # finish refresh 
            time.sleep(7)
            profile.click_on_like()
            #refresh
            profile.click_on_media_tab()
            time.sleep(2)
            profile.click_on_tweet_tab()
            time.sleep(5)
            # finish refresh 
            profile.click_on_like_tab() 
            time.sleep(15)
            
            if profile.text_body_1()==StartingPageLocators.LIKE_TWEET:
               Report_profile.write("PASSED   \n\n" ) 
            else:
                Report_profile.write("FALID : liked tweet not found    \n\n" ) 
           
            
        except:
            Report_profile.write("FALIED :    \n\n" )
     
    def test_case_PROFILE_Unlike(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on unlike  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            profile.click_on_like_tab()
            temp=profile.text_body_1()
            profile.click_on_like()
            profile.click_on_media_tab()
            time.sleep(2)
            profile.click_on_tweet_tab()
            time.sleep(5)
            profile.click_on_like_tab()
            if  temp==profile.text_body_1():
               Report_profile.write("FALID : unliked tweet found   \n\n" ) 
            else:
                Report_profile.write("PASSED    \n\n" ) 
           
            
        except:
            Report_profile.write("FALIED :    \n\n" ) 
    
    
    
    def test_case_REtweet_(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on retweet  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_retweet()
            if profile.WHO_retweet():
                Report_profile.write("PASSED :    \n\n" )
            else:
                Report_profile.write("FAILED :not mention who retweet the tweet  \n\n" )    
                
            
        except:
            Report_profile.write("FALIED :    \n\n" ) 
            
    
    def test_case_PROFILE_click_tweet(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> click on the tweet  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(9)
            #finishing login
            if profile.click_on_the_tweet():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED   \n\n" )   
        except:
            Report_profile.write("FALIED :    \n\n" ) 
                
    
    
    
    def test_case_PROFILE_enable_of_repley_inside(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> click on the tweet then check enable of reply button   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(9)
            #finishing login
            
            profile.click_on_the_tweet()
            time.sleep(9)
            if profile.is_reply_button_enable_click():
                Report_profile.write("FALIED : enable without info   \n\n" ) 
            else:
                Report_profile.write("PASSED   \n\n" )    
        except:
            Report_profile.write("FALIED :    \n\n" ) 
        
    def test_case_PROFILE_click_tweet_cheack_280(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> click on the tweet then check if it accept more tan 280   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(9)
            #finishing login
            
            profile.click_on_the_tweet()
            time.sleep(9)
            profile.send_reple_click(profilelocators.TWEETX280)
            
            if profile.cheack_ur_reply_size_click():
                Report_profile.write("PASSED  \n\n" ) 
            else:
                Report_profile.write("FAILED: didnt accept more than 280 char   \n\n" )    
        except:
            Report_profile.write("FALIED :    \n\n" ) 
        
        
     
    def test_case_PROFILE_click_tweet_cheack_reply(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> click on the tweet then reply   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(9)
            #finishing login
            
            profile.click_on_the_tweet()
            time.sleep(9)
            profile.send_reple_click("nice to meet u")
            
            if profile.click_on_the_tweet_REPLY_button_inside():
                Report_profile.write("PASSED  \n\n" ) 
            else:
                Report_profile.write("FAILED: didnt work   \n\n" )    
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    def test_case_check_username(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> username   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login 
            print(profile.check_username)
            if profile.check_username==StartingPageLocators.USERNAME_1:
                Report_profile.write("PASSED  \n\n" )
            else:
                Report_profile.write("FALIED : its not right username   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )           
    
    def test_case_teweet_search_bar_in_gif(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE ->Testing GIF search bar   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            profile.click_GIF()
            profile.search_GIF()
            if profile.select_GIF_1():
                Report_profile.write("PASSED :  \n\n" )
            else:
                Report_profile.write("FALIED : seach is not working  \n\n" )
                    
                
            
        except:
            Report_profile.write("FALIED : search is not working   \n\n" )   
     
    def test_case_delete_tweet_1(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing on delete the tweet  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_option()
            time.sleep(2)
            profile.click_delete()
            time.sleep(2)
            if profile.click_delete_button():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :     \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
            
    def test_case_PROFILE_click_tweet_like_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> click on the tweet then click like & retweet  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(9)
            #finishing login
            
            profile.click_on_the_tweet()
            time.sleep(9)
            temp=profile.get_likes()
            time.sleep(2)
            print(profile.click_on_the_tweet_REPLY_LIKE())
            
            if not temp==profile.get_likes():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FAILED: not working   \n\n" )   
        except:
            Report_profile.write("FALIED :    \n\n" )  
            
    
    def test_case_teweet_button_enable(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE ->tweet button  enable   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_on_tweet_icon()
            
            if profile.is_tweet_enable():
                Report_profile.write("FALIED : the button is enable withot tweet  \n\n" ) 
            else:
                 Report_profile.write("PASSED  \n\n" )   
                
        except:
            Report_profile.write("FALIED :  \n\n" )  
     
     
    def test_case_notfi_icon(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_notfi.write("Notification -> testing the noficiation icon   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            notfi=page.notfi(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            if notfi.click_nofi_icon():
                Report_notfi.write("PASSED  \n\n" )
            else:
                Report_notfi.write("FALIED : the button is not working  \n\n" )
                    
                
            
        except:
            Report_notfi.write("FALIED :  \n\n" )
           
    def test_case_all_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_notfi.write("Notification -> testing the all button   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            notfi=page.notfi(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            notfi.click_nofi_icon()
            time.sleep(6)
            if notfi.click_all_button():
                Report_notfi.write("PASSED  \n\n" )
            else:
                Report_notfi.write("FALIED : the button is not working  \n\n" )
                    
                
            
        except:
            Report_notfi.write("FALIED :  \n\n" )            
     
    
    def test_case_mention_button(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_notfi.write("Notification -> testing the mention button   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            notfi=page.notfi(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            notfi.click_nofi_icon()
            time.sleep(6)
            if notfi.click_men_button():
                Report_notfi.write("PASSED  \n\n" )
            else:
                Report_notfi.write("FALIED : the button is not working  \n\n" )
                    
                
            
        except:
            Report_notfi.write("FALIED :  \n\n" )  
    
    def test_case_noitifiaction_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_notfi.write("Notification -> number of the notification   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            notfi=page.notfi(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            notfi.click_nofi_icon()
            time.sleep(15)
            if  not notfi.get_notfi():
                Report_notfi.write("PASSED  \n\n" )
            else:
                Report_notfi.write("FALIED : the notictation didnt clear after i saw it  \n\n" )
                    
                
            
        except:
            Report_notfi.write("FALIED :  \n\n" ) 
    
    def test_case_noitifiaction_body(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_notfi.write("Notification -> test on click  the notication   \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            notfi=page.notfi(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            notfi.click_nofi_icon()
            time.sleep(15)
            if  notfi.click_body_of_notfi():
                Report_notfi.write("PASSED  \n\n" )
            else:
                Report_notfi.write("FALIED : the notictation is not found \n\n" )
                    
                
            
        except:
            Report_notfi.write("FALIED :  \n\n" ) 
             
            
    def test_case_PROFILE_click_follower(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing follower text link  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            
            if profile.click_follower():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :  not working   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )  
           
    def test_case_PROFILE_click_following(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing following text link  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            
            if profile.click_following():
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :  not working   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    def test_case_PROFILE_click_following_change_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing unfollow button from followeing  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            temp=profile.get_follwing_number()
            print(profile.get_follwing_number())
            profile.click_following()
            time.sleep(10)
            profile.click_UNfollow()
            time.sleep(4)
            profile.click_PROFILE()
            time.sleep(10)
            
            if not profile.get_follwing_number()==temp :
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :  counting wrong   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )
    
    def test_case_PROFILE_click_followER_change_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing unfollow button from follower  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            temp=profile.get_follwer_number()
            profile.click_follower()
            time.sleep(10)
            profile.click_UNfollow()
            time.sleep(4)
            profile.click_PROFILE()
            time.sleep(10)
            
            if not profile.get_follwer_number()==temp :
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :  counting wrong   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )    
    
    def test_case_PROFILE_click_following_change_number(self):
        global testcases
        global passed
        global failed
        testcases+=1
        Report_profile.write("profile PAGE -> testing unfollow msg that confirm the unfollow  \n" )
        time.sleep(5)
        try: 
        #profile=page.profile(self.driver)
        #log in
            Signin_page=page.SignInPage(self.driver)
            profile=page.profile(self.driver)
            Signin_page.click_sign_in_button()
            Signin_page.insert_your_info(StartingPageLocators.USERNAME)
            time.sleep(2)
            Signin_page.click_Next_button()
            Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
            time.sleep(2)
            Signin_page.click_login()
            time.sleep(5)   
            profile.click_profile_icon()
            time.sleep(2)
            #finishing login
            profile.click_following()
            time.sleep(10)
            profile.click_UNfollow()
            time.sleep(4)
            
            if profile.click_UNfollow_MSG() :
                Report_profile.write("PASSED    \n\n" )
            else:
                Report_profile.write("FALIED :  the msg is not found   \n\n" )
                    
                
        except:
            Report_profile.write("FALIED :    \n\n" )    
    '''                                                                                                                                                                                                          
    def test_log_in(self):
        Signin_page=page.SignInPage(self.driver)
        profile=page.profile(self.driver)
        Signin_page.click_sign_in_button()
        Signin_page.insert_your_info(StartingPageLocators.USERNAME)
        time.sleep(2)
        Signin_page.click_Next_button()
        Signin_page.insert_your_password(StartingPageLocators.PASSWORD)
        time.sleep(2)
        Signin_page.click_login()
        time.sleep(5)   
        profile.click_profile_icon()
        time.sleep(2)
        
    
    
    
    def test_refresh(self):
        profile=page.profile(self.driver)  
        profile.click_profile_icon()
        time.sleep(2)
        profile.click_home_icon()
        time.sleep(2)
        profile.click_profile_icon()  
    
    
    def test_tearDown(self):
        time.sleep(2)
        self.driver.close()
        # Report_profile.close()
        # Report_signUp.close()
        # Report_signIn.close()
        
        
        
if __name__== "__main__":
    unittest.main()
        
        
