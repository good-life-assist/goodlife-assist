class ContactsController < ApplicationController
  def show
    @contact = Contact.new
  end

  def confirm
    @contact = Contact.new(contact_params)
    return unless @contact.invalid?

    render :show
  end

  def back
    @contact = Contact.new(contact_params)
    render :show
  end

  def create
    @contact = Contact.new(contact_params)
    if @contact.save
      ContactMailer.send_mail(@contact).deliver_now
      redirect_to complete_contact_path
    else
      render :show
    end
  end

  def complete; end

  private

  def contact_params
    params.require(:contact)
      .permit(:email,
              :name,
              :phone_number,
              :message,
              :accepted)
  end
end
