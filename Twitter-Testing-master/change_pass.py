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
f = open("Change_password.txt", "a")

def press_save(driver,ident):
    el = driver.find_element_by_xpath(ident)
    action = webdriver.common.action_chains.ActionChains(driver)
    action.move_to_element_with_offset(el, 5, 5)
    action.click()
    action.perform()

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

def reach_change_pass(driver):
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Account_info_Locators.your_Account_button).click()
            f.write("Successfully clicked on your account button \n")
        except:
            f.write("Failed to locate your account button, aborting test \n")
            return False

        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Change_pass_Locators.change_pass_button).click()
            f.write("Successfully clicked on change password button \n")
        except:
            f.write("Failed to locate change password button, aborting test \n")
            return False
        
        try: # try to click on edit profile from profile page
            driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Successfully reached change password page \n")
            return True
        except:
            f.write("Failed to reach account change password, aborting test \n")
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


    def test_mismatched(self):
        current_pass = "12345677"
        new_pass = "123457890"
        confirm_pass = "123456789"

        continue_ = reach_Settings(self.driver,"Mismatched new and confirm password")
        
        if continue_ == False:
            assert False

        continue_ = reach_change_pass(self.driver)
        
        if continue_ == False:
            assert False

        current_pass_field = None
        new_pass_field = None
        confirm_pass_field = None
        save_button_field = None

        try:
            current_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.old_pass)
            f.write("Found current pass field \n")
        except:
            f.write("Could not locate current pass field, aborting test \n")
            return False
        
        try:
            new_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.new_pass)
            f.write("Found new pass field \n")
        except:
            f.write("Could not locate new pass field, aborting test \n")
            return False

        try:
            confirm_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.confirm_pass)
            f.write("Found confirm pass field \n")
        except:
            f.write("Could not locate confirm pass field, aborting test \n")
            return False

        try:
            save_button_field = self.driver.find_element_by_xpath(Change_pass_Locators.save_button)
            f.write("Found save button \n")
        except:
            f.write("Could not locate save button, aborting test \n")
            return False

        current_pass_field.send_keys(current_pass)
        f.write("sent current pass \n")

        new_pass_field.send_keys(new_pass)
        f.write("sent new pass \n")

        confirm_pass_field.send_keys(confirm_pass)
        f.write("sent confirm pass that is mismatched with new \n")

        press_save(self.driver,Change_pass_Locators.save_button)
        f.write("Clicked on save button \n")

        try:
            self.driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Remained on change password, save was disabled, Test passed \n")
            assert True
        except:
            f.write("went back to your account, save was not disabled, Test failed \n")
            assert False

    
    def test_blank_new_confirm_correct_current(self):
        current_pass = "12345678" # dah correct current
        new_pass = ""
        confirm_pass = ""

        continue_ = reach_Settings(self.driver,"correct current with blank new and confirm")
        
        if continue_ == False:
            assert False

        continue_ = reach_change_pass(self.driver)
        
        if continue_ == False:
            assert False

        current_pass_field = None
        new_pass_field = None
        confirm_pass_field = None
        save_button_field = None

        try:
            current_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.old_pass)
            f.write("Found current pass field \n")
        except:
            f.write("Could not locate current pass field, aborting test \n")
            return False
        
        try:
            new_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.new_pass)
            f.write("Found new pass field \n")
        except:
            f.write("Could not locate new pass field, aborting test \n")
            return False

        try:
            confirm_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.confirm_pass)
            f.write("Found confirm pass field \n")
        except:
            f.write("Could not locate confirm pass field, aborting test \n")
            return False

        try:
            save_button_field = self.driver.find_element_by_xpath(Change_pass_Locators.save_button)
            f.write("Found save button \n")
        except:
            f.write("Could not locate save button, aborting test \n")
            return False

        current_pass_field.send_keys(current_pass)
        f.write("sent current pass \n")

        new_pass_field.send_keys(new_pass)
        f.write("sent blank new pass \n")

        confirm_pass_field.send_keys(confirm_pass)
        f.write("sent blank confirm pass \n")

        press_save(self.driver,Change_pass_Locators.save_button)
        f.write("Clicked on save button \n")

        try:
            self.driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Remained on change password, save was disabled, Test passed \n")
            assert True
        except:
            f.write("went back to your account, save was not disabled, Test failed \n")
            assert False


    def test_cor(self):
        current_pass = "000000000000"
        new_pass = "12345678"
        confirm_pass = "12345678"

        continue_ = reach_Settings(self.driver,"wrong current but correct new and confirm")
        
        if continue_ == False:
            assert False

        continue_ = reach_change_pass(self.driver)
        
        if continue_ == False:
            assert False

        current_pass_field = None
        new_pass_field = None
        confirm_pass_field = None
        save_button_field = None

        try:
            current_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.old_pass)
            f.write("Found current pass field \n")
        except:
            f.write("Could not locate current pass field, aborting test \n")
            return False
        
        try:
            new_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.new_pass)
            f.write("Found new pass field \n")
        except:
            f.write("Could not locate new pass field, aborting test \n")
            return False

        try:
            confirm_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.confirm_pass)
            f.write("Found confirm pass field \n")
        except:
            f.write("Could not locate confirm pass field, aborting test \n")
            return False

        try:
            save_button_field = self.driver.find_element_by_xpath(Change_pass_Locators.save_button)
            f.write("Found save button \n")
        except:
            f.write("Could not locate save button, aborting test \n")
            return False

        current_pass_field.send_keys(current_pass)
        f.write("sent wrong current pass \n")

        new_pass_field.send_keys(new_pass)
        f.write("sent correct new pass \n")

        confirm_pass_field.send_keys(confirm_pass)
        f.write("sent correct confirm \n")

        press_save(self.driver,Change_pass_Locators.save_button)
        f.write("Clicked on save button \n")

        try:
            self.driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Remained on change password, save was disabled, Test passed \n")
            assert True
        except:
            f.write("went back to your account, save was not disabled, Test failed \n")
            assert False
    
    def test_minimium(self):
        current_pass = "12345679"
        new_pass = "123"
        confirm_pass = "123"

        continue_ = reach_Settings(self.driver,"new pass less than 8 characters")
        
        if continue_ == False:
            assert False

        continue_ = reach_change_pass(self.driver)
        
        if continue_ == False:
            assert False

        current_pass_field = None
        new_pass_field = None
        confirm_pass_field = None
        save_button_field = None

        try:
            current_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.old_pass)
            f.write("Found current pass field \n")
        except:
            f.write("Could not locate current pass field, aborting test \n")
            return False
        
        try:
            new_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.new_pass)
            f.write("Found new pass field \n")
        except:
            f.write("Could not locate new pass field, aborting test \n")
            return False

        try:
            confirm_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.confirm_pass)
            f.write("Found confirm pass field \n")
        except:
            f.write("Could not locate confirm pass field, aborting test \n")
            return False

        try:
            save_button_field = self.driver.find_element_by_xpath(Change_pass_Locators.save_button)
            f.write("Found save button \n")
        except:
            f.write("Could not locate save button, aborting test \n")
            return False

        current_pass_field.send_keys(current_pass)
        f.write("sent correct current pass \n")

        new_pass_field.send_keys(new_pass)
        f.write("sent 3 character new pass \n")

        confirm_pass_field.send_keys(confirm_pass)
        f.write("sent 3 character matching confirm pass \n")

        press_save(self.driver,Change_pass_Locators.save_button)
        f.write("Clicked on save button \n")

        try:
            self.driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Remained on change password, save was disabled, Test passed \n")
            assert True
        except:
            f.write("went back to your account, save was not disabled, Test failed \n")
            assert False
    
    def test_all_correct(self):
        current_pass = ""
        new_pass = ""
        confirm_pass = ""

        continue_ = reach_Settings(self.driver,"correct current and correct new, confirm")
        
        if continue_ == False:
            assert False

        continue_ = reach_change_pass(self.driver)
        
        if continue_ == False:
            assert False

        current_pass_field = None
        new_pass_field = None
        confirm_pass_field = None
        save_button_field = None

        try:
            current_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.old_pass)
            f.write("Found current pass field \n")
        except:
            f.write("Could not locate current pass field, aborting test \n")
            return False
        
        try:
            new_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.new_pass)
            f.write("Found new pass field \n")
        except:
            f.write("Could not locate new pass field, aborting test \n")
            return False

        try:
            confirm_pass_field = self.driver.find_element_by_xpath(Change_pass_Locators.confirm_pass)
            f.write("Found confirm pass field \n")
        except:
            f.write("Could not locate confirm pass field, aborting test \n")
            return False

        try:
            save_button_field = self.driver.find_element_by_xpath(Change_pass_Locators.save_button)
            f.write("Found save button \n")
        except:
            f.write("Could not locate save button, aborting test \n")
            return False

        current_pass_field.send_keys(current_pass)
        f.write("sent correct current pass \n")

        new_pass_field.send_keys(new_pass)
        f.write("sent correct new pass \n")

        confirm_pass_field.send_keys(confirm_pass)
        f.write("sent correct confirm \n")

        press_save(self.driver,Change_pass_Locators.save_button)
        f.write("Clicked on save button \n")

        try:
            self.driver.find_element_by_xpath(Change_pass_Locators.change_pass_identifier)
            f.write("Remained on change password, save was disabled, Test Failed \n")
            assert False
        except:
            f.write("went back to your account, save was not disabled, Test Passed \n")
            assert True
        
    
    def tearDown(self):
        #f.write("Total tests run : " + str(self.total_tests)+"\n")
        #f.write("Total passed : " + str(self.pass_tests)+"\n")
        #f.write("Total failed : " + str(self.failed_tests)+"\n")
        #f.write("Percentage pass : " + str ((self.pass_tests*1.0 / self.total_tests)*100) + " % \n")
        self.driver.close()  


if __name__== "__main__":
    unittest.main()