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

PATH = "/usr/bin/chromedriver"
f = open("your_Account.txt", "a")

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

def reach_your_Account(driver):
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Account_info_Locators.your_Account_button).click()
            f.write("Successfully clicked on your account button \n")
        except:
            f.write("Failed to locate your account button, aborting test \n")
            return False
        
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(your_Account_Locators.your_Account_ident)
            f.write("Successfully reached your account page \n")
            return True
        except:
            f.write("Failed to reach your account page, aborting test \n")
            return False

def check_button(driver,button_ident,under_const):
    
    try:
        driver.find_element_by_xpath(button_ident).click()
        f.write("clicked on button \n")
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
    
    


    def test_account_info(self):

        continue_ = reach_Settings(self.driver,"Account info button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.account_info_button,your_Account_Locators.account_info_identifier)

        if result == True:
            f.write("Account info page detected, Test passed \n")
            assert True
        else:
            f.write("Account info page not detected, Test failed \n")
            assert False

    
    def test_pass(self):

        continue_ = reach_Settings(self.driver,"change password button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.account_info_button,your_Account_Locators.account_info_identifier)

        if result == True:
            f.write("Account info page detected, Test passed \n")
            assert True
        else:
            f.write("Account info page not detected, Test failed \n")
            assert False
    
    def test_pass(self):

        continue_ = reach_Settings(self.driver,"change password button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.account_info_button,your_Account_Locators.account_info_identifier)

        if result == True:
            f.write("Account info page detected, Test passed \n")
            assert True
        else:
            f.write("Account info page not detected, Test failed \n")
            assert False
    
    def test_pass(self):

        continue_ = reach_Settings(self.driver,"change password button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.account_info_button,your_Account_Locators.account_info_identifier)

        if result == True:
            f.write("Account info page detected, Test passed \n")
            assert True
        else:
            f.write("Account info page not detected, Test failed \n")
            assert False
    
    def test_pass(self):

        continue_ = reach_Settings(self.driver,"change password button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.change_pass_button,your_Account_Locators.change_pass_identifier)

        if result == True:
            f.write("Change pass page detected, Test passed \n")
            assert True
        else:
            f.write("Change pass page not detected, Test failed \n")
            assert False
    
    def test_download(self):

        continue_ = reach_Settings(self.driver,"download archive button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.download_button,your_Account_Locators.under_construct)

        if result == True:
            f.write("Under Construction alert detected, Test passed \n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed \n")
            assert False

    def test_teams(self):

        continue_ = reach_Settings(self.driver,"Tweet deck teams button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.teams_button,your_Account_Locators.under_construct)

        if result == True:
            f.write("Under Construction alert detected, Test passed \n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed \n")
            assert False

    def test_deactivate_pass(self):

        continue_ = reach_Settings(self.driver,"deactivate button")
        
        if continue_ == False:
            assert False

        continue_ = reach_your_Account(self.driver)
        
        if continue_ == False:
            assert False

        result = check_button(self.driver,your_Account_Locators.deactivate,your_Account_Locators.under_construct)

        if result == True:
            f.write("Under Construction alert detected, Test passed \n")
            assert True
        else:
            f.write("Under Construction alert not detected, Test failed \n")
            assert False

    
    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()