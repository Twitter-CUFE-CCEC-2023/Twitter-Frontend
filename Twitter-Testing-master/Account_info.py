from asyncore import write
import email
from faulthandler import is_enabled
from lib2to3.pgen2 import driver
from pickle import FALSE
import unittest
from xml.sax.xmlreader import Locator
from selenium import webdriver
#import page
import time
from locator import *
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys

PATH = "/usr/bin/chromedriver"
f = open("Account_info.txt", "a")

def press_save(driver,ident):
    el = driver.find_element_by_xpath(ident)
    action = webdriver.common.action_chains.ActionChains(driver)
    action.move_to_element_with_offset(el, 5, 5)
    action.click()
    action.perform()

def scrolldown(driver,counter):
    counter += 1
    SCROLL_PAUSE_TIME = 5

    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
    # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

    # Wait to load page
        time.sleep(SCROLL_PAUSE_TIME)

    # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if ((new_height == last_height) or (counter == 2)):
            break
        last_height = new_height

def reach_Settings(driver,test_name):
        open_message = "\nTesting " + test_name + "\n"
        f.write(open_message)

        try:  # try to click on profile from sidebar
            driver.find_element_by_xpath(Account_info_Locators.more_button_home).click()
            f.write("Successfully clicked on more button \n")
        except:
            f.write("Failed to find more button from sidebar, aborting test \n")
            return False
        
        try:  # try to click on profile from sidebar
            driver.find_element_by_xpath(Account_info_Locators.settings_button).click()
            f.write("Successfully clicked on settings button \n")
            return True
        except:
            f.write("Failed to find settings button, aborting test \n")
            return False

def reach_account_info(driver):
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Account_info_Locators.your_Account_button).click()
            f.write("Successfully clicked on your account button \n")
        except:
            f.write("Failed to locate your account button, aborting test \n")
            return False

        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Account_info_Locators.account_info_button).click()
            f.write("Successfully clicked on account info button \n")
        except:
            f.write("Failed to locate account info button, aborting test \n")
            return False
        
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Account_info_Locators.account_info_identifier)
            f.write("Successfully reached account info page \n")
            return True
        except:
            f.write("Failed to reach account info page, aborting test \n")
            return False

def check_button(driver,button_ident,under_const):
    
    try:
        driver.find_element_by_xpath(button_ident).click()
        f.write("Clicked on button\n")
    except:
        f.write("Could not locate button, aborting test \n")
        return False

    try:
        driver.find_element_by_xpath(under_const)
        return True
    except:
        return False

def delay():
    time.sleep(10)

class PythonOrgSearch(unittest.TestCase):
    
    
    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://www.twittercloneteamone.tk/home")
        self.driver.implicitly_wait(10)
        self.total_tests = 0
        self.pass_tests = 0
        self.failed_tests = 0

        el = self.driver.find_element_by_xpath(sign_in)
        action = webdriver.common.action_chains.ActionChains(self.driver)
        action.move_to_element_with_offset(el, 5, 5)
        action.click()
        action.perform()

        time.sleep(1)

        self.driver.find_element_by_xpath(email_field).clear()
        self.driver.find_element_by_xpath(email_field).send_keys(email_text)

        time.sleep(1)
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        try:
            self.driver.find_element_by_xpath(next_button).click()
        except:
            print("s")
        
        self.driver.find_element_by_xpath(pass_field).clear()
        self.driver.find_element_by_xpath(pass_field).send_keys(pass_text)
        time.sleep(1)
        
        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")

        try:
            self.driver.find_element_by_xpath(log_in_button).click()
        except:
            print("s")
        
        time.sleep(1)
    '''
    def test_username_blank(self):

        continue_ = reach_Settings(self.driver,"leaving username blank")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False

        username_box = None
        save = None

        try: # try to click on username
            self.driver.find_element_by_xpath(Account_info_Locators.username_button).click()
            f.write("Successfully clicked on username \n")
        except:
            f.write("Failed to locate username button, aborting test \n")
            assert False

        try: # try to find username field
            username_box = self.driver.find_element_by_xpath(Account_info_Locators.username_field)
            f.write("Successfully found on username field \n")
        except:
            f.write("Failed to locate username field, aborting test \n")
            assert False
        
        for i in range(100):
            username_box.send_keys(Keys.BACK_SPACE)
        f.write("Cleared username field\n")

        try: # try to find save button
            save = self.driver.find_element_by_xpath(Account_info_Locators.username_save)
            f.write("Successfully found on save button \n")
        except:
            f.write("Failed to locate save button, aborting test \n")
            assert False

        save.click() # clicking on save
        f.write("Clicked on save button\n")

        try: # try to find which page we are on
            self.driver.find_element_by_xpath(Account_info_Locators.account_info_identifier)
            f.write("Moved back to account info, Test Failed \n")
            assert False
        except:
            #f.write("Successfully remained on username change, save was disabled, Test passed \n")
            assert False
    '''
    def test_name(self):

        username_change = "Amr"

        continue_ = reach_Settings(self.driver,"entering a new username")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False

        name_box = None
        save = None

        try: # try to click on username
            self.driver.find_element_by_xpath(Account_info_Locators.username_button).click()
            f.write("Successfully clicked on username \n")
        except:
            f.write("Failed to locate username button, aborting test \n")
            assert False

        try: # try to find name field
            name_box = self.driver.find_element_by_xpath(Account_info_Locators.username_field)
            f.write("Successfully found on name field \n")
        except:
            f.write("Failed to locate name field, aborting test \n")
            assert False
        
        for i in range(100):
            name_box.send_keys(Keys.BACK_SPACE)
        f.write("Cleared username field \n")

        name_box.send_keys(username_change)
        f.write("Sent new username \n")

        try: # try to find save button
            save = self.driver.find_element_by_xpath(Account_info_Locators.username_save)
            f.write("Successfully found on save button \n")
        except:
            f.write("Failed to locate save button, aborting test \n")
            assert False

        time.sleep(5)

        save.click() # clicking on save
        f.write("Clicked on save button\n")
        self.driver.maximize_window()
        time.sleep(10)

        try: # try to find which page we are on
            self.driver.find_element_by_xpath(Account_info_Locators.username_save)
            f.write("Remained on username change, save was disabled, Test Failed \n")
            return
            assert False
        except:
            f.write("Moved back to account info\n")
        
        new_name = None

        try: # getting to home
            self.driver.find_element_by_xpath(Account_info_Locators.Home_sidebar).click()
            f.write("Clicked on home button to check name change \n")
        except:
            f.write("couldn't find home button, aborting test \n")
            assert False

        time.sleep(5)

        try: # getting name
            new_name = self.driver.find_element_by_xpath(Account_info_Locators.username_home).text
            print("\n\n\nnew name -> " + new_name + " \n\n\n")
            f.write("Found name element \n")
        except:
            f.write("couldn't find name element, aborting test \n")
            assert False

        if (new_name == ("@"+username_change)):
            f.write("Name changed to entered name successfully, Test passed \n")
            assert True
        else:
            f.write("Name didn't change to entered name, Test Failed \n")
            assert False
    
    def test_phone(self):

        continue_ = reach_Settings(self.driver,"phone button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.phone,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_email(self):

        continue_ = reach_Settings(self.driver,"email button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.email,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_verified(self):

        continue_ = reach_Settings(self.driver,"verified button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.verified,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_protected(self):

        continue_ = reach_Settings(self.driver,"protected tweets button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.protected,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_creation(self):

        continue_ = reach_Settings(self.driver,"creation button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.account_creation,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_country(self):

        continue_ = reach_Settings(self.driver,"country button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.country,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_gender(self):

        continue_ = reach_Settings(self.driver,"gender button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.gender,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")

    def test_birth(self):

        continue_ = reach_Settings(self.driver,"birth_date button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.birth_date,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")

    def test_age(self):

        continue_ = reach_Settings(self.driver,"age button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        result = check_button(self.driver,Account_info_Locators.age,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")
    
    def test_auto(self):

        continue_ = reach_Settings(self.driver,"automation button")
        
        if continue_ == False:
            assert False

        continue_ = reach_account_info(self.driver)
        
        if continue_ == False:
            assert False
        
        scrolldown(self.driver,1)

        result = check_button(self.driver,Account_info_Locators.automation,Account_info_Locators.under_construction_ident)

        if (result == True):
            f.write("Under Construction alert detected, Test passed\n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed\n")

    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()