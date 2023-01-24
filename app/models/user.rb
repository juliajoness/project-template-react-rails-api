class User < ApplicationRecord
    has_secure_password
    has_many :steps
    validates_presence_of :email 
    validates :username, uniqueness: {case_sensitive: false}
end
